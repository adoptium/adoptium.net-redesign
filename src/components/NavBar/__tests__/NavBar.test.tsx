import React from "react"
import { render } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import NavBar from ".."

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
})

describe("NavBar component", () => {
  it("navbar renders correctly", () => {
    const { container } = render(<NavBar />)
    expect(container).toMatchSnapshot()
  })
})
