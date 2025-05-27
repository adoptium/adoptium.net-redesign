import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { axe } from "vitest-axe"
import Index, { Head } from "../supported-platforms"

describe("Supported Platforms page", () => {
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
    expect(title?.textContent).toEqual("Temurin™ Supported Platforms | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<Index />)
    const results = await axe(container)
    // @ts-ignore
    expect(results).toHaveNoViolations()
  })
})
