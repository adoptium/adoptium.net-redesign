import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CommonButton from "../index"

describe("CommonButton component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <CommonButton className={"test"} children={"test"} icon={"test"} />,
    )

    expect(container).toMatchSnapshot()
  })
})
