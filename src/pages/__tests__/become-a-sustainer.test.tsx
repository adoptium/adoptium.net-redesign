import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import BecomeASustainer, { Head } from "../become-a-sustainer"

describe("Become a Sustainer page", () => {
  it("renders correctly", () => {
    const { container } = render(<BecomeASustainer />)
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("Become a Sustainer | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<BecomeASustainer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
