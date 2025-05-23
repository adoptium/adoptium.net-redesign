import React from "react"
import { act, render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { afterEach, describe, expect, it, vi } from "vitest"
import { axe } from "vitest-axe"
import "vitest-axe/extend-expect"
import Nightly, { Head } from "../nightly"
import AxiosInstance from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(AxiosInstance)

afterEach(() => {
  vi.clearAllMocks()
})

describe("Temurin Nightly page", () => {
  it("renders correctly", async () => {
    mock.onGet().reply(200, [], { pagecount: 0 })

    const { container } = render(<Nightly />)
    // eslint-disable-next-line
    const pageContent = container.querySelector("main")

    await act(async () => {
      const datepicker = screen.getByLabelText("Build Date")
      fireEvent.change(datepicker, { target: { value: "2022-01-01" } })
      expect(datepicker.getAttribute("value")).toBe("2022-01-01")
    })

    expect(pageContent).toMatchSnapshot()
  })

  it("head renders correctly", () => {
    mock.onGet().reply(200, [], { pagecount: 0 })

    const { container } = render(<Head />)
    // eslint-disable-next-line
    const title = container.querySelector("title")
    expect(title).toHaveTextContent("Nightly Builds | Adoptium")
  })

  it("has no accessibility violations", async () => {
    mock.onGet().reply(200, [], { pagecount: 0 });

    let container;
    await act(async () => {
      const renderResult = render(<Nightly />);
      container = renderResult.container;
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
})
