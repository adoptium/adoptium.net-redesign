import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { axe } from "vitest-axe"
import Adopters, { Head } from "../adopters"

vi.mock("../../components/Logos", () => {
  return {
    __esModule: true,
    default: () => <div />,
    LogoType: {},
  }
})

describe("Adopters Page", () => {
  it("renders correctly", () => {
    const { container } = render(<Adopters />)
    expect(container).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("Our Adopters | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<Adopters />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
