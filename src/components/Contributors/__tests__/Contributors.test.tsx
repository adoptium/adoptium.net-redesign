import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ContributorsHome from "../home"

describe("ContributorsHome component", () => {
  it("Contributors renders correctly", () => {
    const { container } = render(<ContributorsHome />)
    expect(container).toMatchSnapshot()
  })
})
