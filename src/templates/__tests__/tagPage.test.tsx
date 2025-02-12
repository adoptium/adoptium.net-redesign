import React from "react"
import { render } from "@testing-library/react"
import TagPage, { Head } from "../tagPage"
import { describe, expect, it } from "vitest"
import { axe } from "vitest-axe"
import { createMDXData } from "../../__fixtures__/page"

let mockData = createMDXData()
const pageContext = {
  tag: "test",
  previousPageNumber: null,
  nextPageNumber: 2,
  currentPageNumber: 1,
  numTagPages: 5,
}

describe("TagPage pages", () => {
  it("renders correctly", () => {
    const { container } = render(
      <TagPage data={mockData} pageContext={pageContext} />,
    )
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toMatchSnapshot()
  })

  it("renders correctly - with next pagination", () => {
    const { container } = render(
      <TagPage
        data={mockData}
        pageContext={{ ...pageContext, nextPageNumber: 2 }}
      />,
    )
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    expect(pageContent).toMatchSnapshot()
  })

  it("renders correctly - with previous pagination", () => {
    const { container } = render(
      <TagPage
        data={mockData}
        pageContext={{ ...pageContext, previousPageNumber: 1 }}
      />,
    )
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")
    expect(pageContent).toMatchSnapshot()
  })

  it("renders correctly - with next and previous pagination", () => {
    const { container } = render(
      <TagPage
        data={mockData}
        pageContext={{
          ...pageContext,
          nextPageNumber: 2,
          previousPageNumber: 1,
        }}
      />,
    )
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")
    expect(pageContent).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    const { container } = render(<Head pageContext={pageContext} />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title?.textContent).toEqual("test | Adoptium")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(
      <TagPage data={mockData} pageContext={pageContext} />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
