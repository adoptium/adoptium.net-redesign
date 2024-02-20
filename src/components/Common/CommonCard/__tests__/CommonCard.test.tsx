import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CommonCard from "../index"

describe("CommonButton component", () => {
  it("should render correctly", () => {
    const { container } = render(
        <CommonCard
            data={{
                title: "test",
                description: "test",
                button: "test",
            }}
        />
    )

    expect(container).toMatchSnapshot()
  })
})
