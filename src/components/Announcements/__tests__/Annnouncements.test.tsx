import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Announcements from ".."

describe("Announcements component", () => {
  it("Announcements renders correctly", () => {
    const handleCloseMock = vi.fn()
    const { container } = render(
      <Announcements handleClose={handleCloseMock} />,
    )
    expect(container).toMatchSnapshot()
  })
})
