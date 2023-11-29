import React from "react"

import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import WGProjects from ".."

describe("WGProjects component", (): void => {
  it("renders correctly", (): void => {
    const { container } = render(<WGProjects />)
    expect(container).toMatchSnapshot()
  })
})
