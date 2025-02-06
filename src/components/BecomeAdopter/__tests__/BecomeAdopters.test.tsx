import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BecomeAdopter from "../"

describe("BecomeAdopter", () => {
  it("renders the button and hides the content initially", () => {
    render(<BecomeAdopter />);

    // Check that the trigger button is rendered
    const button = screen.getByRole("button", {
      name: /How can I get my logo displayed\?/i,
    });
    expect(button).toBeInTheDocument();

    // Ensure the dropdown content is not present initially
    const content = screen.queryByText(/You can easily add your organization’s logo/i);
    expect(content).toBeNull();
  });

  it("shows the dropdown content when the button is clicked, and hides it on second click", () => {
    render(<BecomeAdopter />);

    const button = screen.getByRole("button", {
      name: /How can I get my logo displayed\?/i,
    });

    // Click the button to show the content
    fireEvent.click(button);
    const content = screen.getByText(/You can easily add your organization’s logo/i);
    expect(content).toBeInTheDocument();

    // Click the button again to hide the content
    fireEvent.click(button);
    expect(screen.queryByText(/You can easily add your organization’s logo/i)).toBeNull();
  });
});
