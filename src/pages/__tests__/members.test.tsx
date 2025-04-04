import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { axe } from "vitest-axe"
import Members, { Head } from "../members"

vi.mock("../../util/scrollToView", () => ({
  scrollToSection: vi.fn(),
}))

vi.mock("../../components/Logos", () => {
  return {
    __esModule: true,
    default: () => <div />,
    LogoType: {},
  }
})

describe("Members Page", () => {
  it("renders correctly", () => {
    const { container } = render(<Members />)
    expect(container).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("Our Members | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<Members />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
