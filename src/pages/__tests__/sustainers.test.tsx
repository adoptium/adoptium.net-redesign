import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { axe } from "vitest-axe"
import Sustainers, { Head } from "../sustainers"

vi.mock("../../components/Logos", () => {
  return {
    __esModule: true,
    default: () => <div />,
    LogoType: {},
  }
})

describe("Sustainers page", () => {
  it("renders correctly", () => {
    const { container } = render(<Sustainers />)
    expect(container).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("Sponsor Us | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<Sustainers />)
    const results = await axe(container)
    // @ts-ignore
    expect(results).toHaveNoViolations()
  })
})
