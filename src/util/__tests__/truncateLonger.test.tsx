import { truncateIfLonger } from "../truncateLonger"
import { describe, expect, it } from "vitest"

describe("truncateIfLonger", () => {
  it("should return the original string if it's less than or equal to 40 words", () => {
    const input = Array(30).fill("word").join(" ")
    expect(truncateIfLonger(input)).toBe(input)
  })

  it("should truncate the string and append '...' if it has more than 40 words", () => {
    const input = Array(45).fill("word").join(" ")
    const expectedOutput = Array(40).fill("word").join(" ") + "..."
    expect(truncateIfLonger(input)).toBe(expectedOutput)
  })

  it("should handle a string with exactly 40 words", () => {
    const input = Array(40).fill("test").join(" ")
    expect(truncateIfLonger(input)).toBe(input)
  })

  it("should handle extra spaces correctly", () => {
    const input = "   word1    word2   word3   "
    expect(truncateIfLonger(input)).toBe(input)
  })

  it("should return empty string if given empty string", () => {
    expect(truncateIfLonger("")).toBe("")
  })
})
