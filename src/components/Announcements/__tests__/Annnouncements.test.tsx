import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Announcements from ".."

const mockData = ({id, days}) => ({
  node: {
    id,
    frontmatter: {
      title: `Test Announcement ${id}`,
      date: Date.now() - 1000 * 60 * 60 * 24 * days,
      description: `Description for announcement ${id}`,
      tags: ["release-notes"],
    },
    fields: {
      postPath: `/test-announcement-${id}`,
    },
  },
})

vi.mock("gatsby", async () => {
  const actualGatsby = await vi.importActual("gatsby")
  return {
    ...actualGatsby,
    // This no-op function prevents the error by simply returning the query string.
    graphql: (strings: TemplateStringsArray, ..._args: any[]) => strings[0],
    // Provide your test data for useStaticQuery.
    useStaticQuery: () => ({
      allMdx: {
        edges: [
          mockData({id: 1, days: 1}), // 1 day ago
          mockData({id: 2, days: 3}), // 3 days ago
          mockData({id: 3, days: 7}), // 1 week ago
          mockData({id: 4, days: 60}),  // 8 weeks ago
        ],
      },
    }),
  }
})

describe("Announcements component", () => {
  it("Announcements renders correctly", () => {
    const handleCloseMock = vi.fn()
    const { container } = render(
      <Announcements handleClose={handleCloseMock} />,
    )
    expect(container).toMatchSnapshot()
  })
})
