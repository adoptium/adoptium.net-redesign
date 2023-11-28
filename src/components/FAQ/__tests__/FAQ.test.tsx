import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import FAQ from ".."

describe("FAQ component", () => {
  it("renders correctly", () => {
    const { container } = render(<FAQ />)
    expect(container).toMatchSnapshot()
  })

  it("toggles FAQ answer visibility on click", () => {
    render(<FAQ />)

    // Initially, no FAQ answers should be visible
    expect(screen.queryAllByText(/Lorem ipsum dolor sit amet/).length).toBe(0)

    // Click the first FAQ question
    fireEvent.click(
      screen.getAllByText("Where are the latest Adoptium® JDKs?")[0],
    )

    // Now the first answer should be visible
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/).length).toBe(1)

    // Click again to close
    fireEvent.click(
      screen.getAllByText("Where are the latest Adoptium® JDKs?")[0],
    )

    // The answer should be hidden again
    expect(screen.queryAllByText(/Lorem ipsum dolor sit amet/).length).toBe(0)
  })
})
