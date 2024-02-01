import { renderHook, waitFor } from "@testing-library/react"
import { afterAll, afterEach, describe, expect, it, vi } from "vitest"
import { fetchReleaseNotesForVersion } from "../fetchReleaseNotes"
import { createMockReleaseNotesAPI } from "../../__fixtures__/hooks"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)
let mockResponse = createMockReleaseNotesAPI(1)

afterEach(() => {
  vi.clearAllMocks()
  mock.reset()
})

afterAll(() => {
  mock.restore()
})

let sortReleaseNotesByCallback = vi.fn()

describe("fetchReleaseNotesForVersion", () => {
  it("returns valid JSON", async () => {
    mock.onGet().reply(200, mockResponse)
    let spy = vi.spyOn(axios, "get")

    const { result } = renderHook(() =>
      fetchReleaseNotesForVersion(
        true,
        "sample_version",
        sortReleaseNotesByCallback,
      ),
    )
    await waitFor(
      () => {
        expect(result.current?.release_name).toBe("release_name_mock")
      },
      { interval: 1 },
    )
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(
      "https://api.adoptium.net/v3/info/release_notes/sample_version",
    )
    expect(result.current).toMatchSnapshot()
  })

  it("returns null if error is caught in fetch", async () => {
    mock.onGet().reply(200, mockResponse)
    let spy = vi.spyOn(axios, "get")

    const { result } = renderHook(() =>
      fetchReleaseNotesForVersion(
        true,
        "sample_version",
        sortReleaseNotesByCallback,
      ),
    )
    await waitFor(
      () => {
        expect(result.current).toBe(null)
      },
      { interval: 1 },
    )
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(
      "https://api.adoptium.net/v3/info/release_notes/sample_version",
    )
  })

  it("returns null if version is not defined", async () => {
    mock.onGet().reply(200, mockResponse)

    const { result } = renderHook(() =>
      fetchReleaseNotesForVersion(true, null, sortReleaseNotesByCallback),
    )
    expect(result.current).toBe(null)
  })

  it("checks sortReleaseNotesByCallback to be called", async () => {
    mock.onGet().reply(200, mockResponse)

    const { result } = renderHook(() =>
      fetchReleaseNotesForVersion(
        true,
        "sample_version",
        sortReleaseNotesByCallback,
      ),
    )
    await waitFor(
      () => {
        expect(sortReleaseNotesByCallback).toHaveBeenCalledTimes(1)
      },
      { interval: 1 },
    )
  })

  it("checks sortReleaseNotesByCallback NOT to be called", async () => {
    mock.onGet().reply(200, mockResponse)

    const { result } = renderHook(() =>
      fetchReleaseNotesForVersion(true, "sample_version"),
    )
    await waitFor(
      () => {
        expect(sortReleaseNotesByCallback).toHaveBeenCalledTimes(0)
      },
      { interval: 1 },
    )
  })

  it("releaseNotes to be null on error", async () => {
    mock.onGet().reply(500)
    let spy = vi.spyOn(axios, "get")

    const { result } = renderHook(() =>
      fetchReleaseNotesForVersion(true, "sample_version"),
    )
    await waitFor(
      () => {
        expect(result).toBeNull
      },
      { interval: 1 },
    )
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
