import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import LatestNews from ".."
import LatestNewsSlider from "../LatestNewsSlider"

const newsmap = [
  {
    node: {
      frontmatter: {
        title: "Test title 1",
        date: "2021-01-01",
      },
      fields: {
        postPath: "/testpath",
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: "Test title 2",
        date: "2021-01-02",
      },
      fields: {
        postPath: "/testpath",
      },
    },
  },
]

describe("Latest News component", () => {
  it("renders correctly", () => {
    const { container } = render(<LatestNews />)
    expect(container).toMatchSnapshot()
  })

  it("renders correctly with data", () => {
    render(<LatestNewsSlider newsmap={newsmap} />)
    expect(screen.getByText("Test title 1")).toBeInTheDocument()
  })

  it("navigates news items correctly", () => {
    render(<LatestNewsSlider newsmap={newsmap} />)

    // Find and click the next button
    const nextButton = screen.getByLabelText("Next News")
    fireEvent.click(nextButton)
    const prevButton = screen.getByLabelText("Previous News")
    fireEvent.click(prevButton)
  })
})
