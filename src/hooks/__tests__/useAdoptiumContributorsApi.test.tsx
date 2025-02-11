import { renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { useAdoptiumContributorsApi } from "../useAdoptiumContributorsApi"
import { createMockAdoptiumContributorsApi } from "../../__fixtures__/hooks"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)
const mockResponse = [createMockAdoptiumContributorsApi()]

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => store = {},
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

beforeEach(() => {
  localStorage.clear()
  mock.reset()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe("useAdoptiumContributorsApi hook", () => {
  it("fetches data when isVisible is true", async () => {
    mock.onGet().reply(200, mockResponse, {
      Link: '<https://api.github.com/repositories/1/contributors?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1/contributors?per_page=1&page=50>; rel="last"',
    })

    const { result } = renderHook(() => useAdoptiumContributorsApi(true))

    await waitFor(() => {
      expect(result.current).not.toBeNull()
    })

    expect(result.current).toEqual({
      avatarUri: "https://github.com/images/error/octocat_happy.gif",
      profileUri: "https://github.com/images/error/octocat_happy.gif",
      login: "test-user",
      contributionsCount: 10,
      commitsListUri: expect.stringMatching(
        /^https:\/\/github\.com\/adoptium\/\S+\/commits\?author=test-user$/,
      ),
      repo: expect.stringMatching(/\S+/),
    })
  })

  it("does not fetch data when isVisible is false", () => {
    const { result } = renderHook(() => useAdoptiumContributorsApi(false))
    expect(result.current).toBeNull()
  })

  describe("error handling", () => {
    beforeEach(() => {
      global.fetch = vi.fn(() => Promise.reject("error"))
    })

    it("returns null if error is caught in fetch", async () => {
      mock.onGet().reply(500)
      let spy = vi.spyOn(axios, "get")

      const { result } = renderHook(() => useAdoptiumContributorsApi(true))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(1)
      })

      expect(result.current).toBeNull()
    })

    it("getMaxContributors fails on error", async () => {
      mock.onGet().reply(500)
      let spy = vi.spyOn(axios, "get")

      const { result } = renderHook(() => useAdoptiumContributorsApi(true))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(1)
      })

      expect(result.current).toBeNull()
    })

    it("getContributor fails on error", async () => {
      mock.onGet(/.*\/contributors\?per_page=1$/).reply(200, mockResponse, {
        Link: '<https://api.github.com/repositories/1/contributors?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1/contributors?per_page=1&page=50>; rel="last"',
      })
      mock.onGet().reply(500)
      let spy = vi.spyOn(axios, "get")

      const { result } = renderHook(() => useAdoptiumContributorsApi(true))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(4 /* 1 for the repository + 3 for the contributor (1 + 2 retry) */)
      })

      expect(result.current).toBeNull()
    })
  })
})
