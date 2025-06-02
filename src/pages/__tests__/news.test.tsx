import React from "react"
import { render } from "@testing-library/react"
import NewsIndex, { Head } from "../news"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import { createMDXData } from "../../__fixtures__/page"

let mockData = createMDXData()

describe("News page", () => {
  it("renders correctly", () => {
    const { container } = render(<NewsIndex data={mockData} />)
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toMatchSnapshot()
  })

  // test when nextPageNumber is set
  it("renders correctly with nextPageNumber", () => {
    mockData.allMdx.totalCount = 11
    const { container } = render(<NewsIndex data={mockData} />)
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toHaveTextContent("Next")
  })

  it("head renders correctly", () => {
    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("News | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<NewsIndex data={mockData} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
