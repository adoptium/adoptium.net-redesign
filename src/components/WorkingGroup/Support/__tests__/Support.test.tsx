import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Support from "../index"

describe("Working Group Support component", () => {
  it("should render correctly", () => {
    const { container } = render(<Support/>)

    expect(container).toMatchSnapshot()
  })
})
