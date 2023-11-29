import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import DownloadCounter from ".."

describe("DownloadCounter component", () => {
  it("should render correctly", () => {
    const { container } = render(<DownloadCounter />)

    expect(container).toMatchSnapshot()
  })
})
