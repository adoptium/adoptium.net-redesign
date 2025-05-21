import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom"
import { axe } from "vitest-axe"
import VersionSelector from "../index"
import { setURLParam } from "../../../../util/setURLParam"

// Mock the setURLParam utility
vi.mock("../../../../util/setURLParam", () => ({
  setURLParam: vi.fn(),
}))

describe("VersionSelector component", () => {
  const mockProps = {
    activeVersionTab: 1,
    setActiveVersionTab: vi.fn(),
    versions: [
      {
        node: {
          version: 8,
          label: "8",
        },
      },
      {
        node: {
          version: 11,
          label: "11",
        },
      },
      {
        node: {
          version: 17,
          label: "17",
        },
      },
    ],
    updateVersion: vi.fn(),
    defaultVersion: "latest",
    updateOS: vi.fn(),
    updateArch: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders correctly", () => {
    const { container } = render(<VersionSelector {...mockProps} />)
    expect(container).toMatchSnapshot()
  })
  
  it("renders 'All Versions' button and version buttons", () => {
    render(<VersionSelector {...mockProps} />)
    
    // Check for "All Versions" button
    expect(screen.getByText("All Versions")).toBeInTheDocument()
    
    // Check for version buttons
    expect(screen.getByText("JDK 8")).toBeInTheDocument()
    expect(screen.getByText("JDK 11")).toBeInTheDocument()
    expect(screen.getByText("JDK 17")).toBeInTheDocument()
  })

  it("highlights the active version tab", () => {
    const activeProps = {
      ...mockProps,
      activeVersionTab: 11,
    }
    
    render(<VersionSelector {...activeProps} />)
    
    // Get all span elements within buttons
    const allVersionsSpan = screen.getByText("All Versions").closest("span")
    const jdk11Span = screen.getByText("JDK 11").closest("span")
    
    // Check correct classes are applied
    expect(allVersionsSpan).toHaveClass("text-[#8a809e]")
    expect(allVersionsSpan).toHaveClass("border-transparent")
    
    expect(jdk11Span).toHaveClass("text-white")
    expect(jdk11Span).toHaveClass("border-primary")
    expect(jdk11Span).toHaveClass("border-b-[2px]")
  })

  it("calls setActiveTabVersion with default version when 'All Versions' is clicked", () => {
    render(<VersionSelector {...mockProps} />)
    
    // Click on "All Versions" button
    fireEvent.click(screen.getByText("All Versions"))
    
    // Verify the callbacks
    expect(setURLParam).toHaveBeenCalledWith("version", "latest")
    expect(mockProps.updateVersion).toHaveBeenCalledWith("latest")
    expect(mockProps.setActiveVersionTab).toHaveBeenCalledWith(1)
    
    // Verify OS and arch are reset to "any"
    expect(setURLParam).toHaveBeenCalledWith("os", "any")
    expect(mockProps.updateOS).toHaveBeenCalledWith("any")
    expect(setURLParam).toHaveBeenCalledWith("arch", "any")
    expect(mockProps.updateArch).toHaveBeenCalledWith("any")
  })

  it("calls setActiveTabVersion with specific version when a version button is clicked", () => {
    render(<VersionSelector {...mockProps} />)
    
    // Click on specific version button
    fireEvent.click(screen.getByText("JDK 11"))
    
    // Verify the callbacks
    expect(setURLParam).toHaveBeenCalledWith("version", 11)
    expect(mockProps.updateVersion).toHaveBeenCalledWith(11)
    expect(mockProps.setActiveVersionTab).toHaveBeenCalledWith(11)
    
    // Verify OS and arch are reset to "any"
    expect(setURLParam).toHaveBeenCalledWith("os", "any")
    expect(mockProps.updateOS).toHaveBeenCalledWith("any")
    expect(setURLParam).toHaveBeenCalledWith("arch", "any")
    expect(mockProps.updateArch).toHaveBeenCalledWith("any")
  })

  it("has no accessibility violations", async () => {
    const { container } = render(<VersionSelector {...mockProps} />)
    const results = await axe(container)
    
    // Check for violations
    expect(results.violations.length).toBe(0)
  })
})
