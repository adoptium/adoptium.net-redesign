import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import HeroSection from ".."

vi.mock("../../LatestTemurin", () => {
  return {
    default: () => <div>latest-temurin</div>,
  }
})

describe("HeroSection component", () => {
  it("should render correctly", () => {
    const { container } = render(<HeroSection />)

    expect(container).toMatchSnapshot()
  })
})
