import React from "react"
import userEvent from "@testing-library/user-event"
import { render, screen, act } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import ChecksumModal from ".." // Ensure this import path is correct

// Setup for navigator.clipboard mock
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
})

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
})

window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

const navigatorClipboardSpy = vi.spyOn(navigator.clipboard, "writeText")

describe("ChecksumModal component", () => {
  // Providing the required props for the component to render correctly
  const requiredProps = {
    open: true,
    setOpen: vi.fn(), // Mocking setOpen function
    checksum: "exampleChecksumValue",
  }

  it("ChecksumModal renders correctly", () => {
    const { container } = render(
      <ChecksumModal
        open={true}
        setOpen={() => {}}
        checksum="exampleChecksumValue"
      />,
    )
    // wait for the component to be in the document
    expect(screen.getByText("Checksum (SHA256)")).toBeInTheDocument()
    // Find the input field by its role and ensure it's in the document
    const inputField = screen.getByRole("textbox")
    expect(inputField).toBeInTheDocument()

    // Assert that the input field has the correct value
    expect(inputField).toHaveValue("exampleChecksumValue")
    expect(container).toMatchSnapshot()
  })

  it("ChecksumModal copies correctly", async () => {
    render(<ChecksumModal {...requiredProps} />)
    navigatorClipboardSpy.mockImplementationOnce(() => Promise.resolve())

    // Using act to wait for all state updates and effects to finish
    await act(async () => {
      userEvent.click(screen.getByText("Copy"))
    })

    // Since the text changes to "Copied" after the button is clicked and state is updated,
    // we need to ensure the component has re-rendered with the new state
    await screen.findByText("Copied")

    expect(navigatorClipboardSpy).toHaveBeenCalledTimes(1)
    expect(navigatorClipboardSpy).toHaveBeenCalledWith("exampleChecksumValue")
  })
})
