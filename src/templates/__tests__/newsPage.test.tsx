import React from "react"
import { render } from "@testing-library/react"
import NewsPage, { Head } from "../newsPage"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import { createMDXData } from "../../__fixtures__/page"

let mockData = createMDXData()
const pageContext = {
  currentPage: 2,
  previousPageNumber: 1,
  nextPageNumber: 3,
  totalPages: 5, 
}

describe("News Template page", () => {
  it("renders correctly", () => {
    const { container } = render(
      <NewsPage data={mockData} pageContext={pageContext} />,
    )
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head pageContext={pageContext} />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("News & Events – Page 2 | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(
      <NewsPage data={mockData} pageContext={pageContext} />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
