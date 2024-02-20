import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import Index, { Head } from "../support-us"

describe("Support Us page", () => {
  it("renders correctly", () => {
    const { container } = render(<Index />)
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("Support Us | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<Index />)
    const results = await axe(container)
    // @ts-ignore
    expect(results).toHaveNoViolations()
  })
})
