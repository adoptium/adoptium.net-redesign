import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Sponsors from "../sponsors"

describe("Sponsors component", () => {
  it("Sponsors renders correctly", () => {
    const { container } = render(<Sponsors />)
    expect(container).toMatchSnapshot()
  })
})
