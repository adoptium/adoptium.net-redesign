import * as React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { vi, describe, test, beforeEach, expect } from "vitest"
import VendorSelector from "../index"
import vendors from "../../../../json/marketplace.json"
import getVendorIdentifier from "../../../../util/vendors"

// Mock the shuffle function to return the array unchanged (for predictable testing)
vi.mock("../../../../util/shuffle", () => ({
  shuffle: (arr: any[]) => arr,
}))

describe("Marketplace VendorSelector", () => {
  const mockSetSelectedVendorIdentifiers = vi.fn()
  const initialSelectedVendors = vendors.map(v => getVendorIdentifier(v))
  
  beforeEach(() => {
    mockSetSelectedVendorIdentifiers.mockClear()
  })

  test("renders all vendors correctly", () => {
    render(
      <VendorSelector
        selectedVendorIdentifiers={initialSelectedVendors}
        setSelectedVendorIdentifiers={mockSetSelectedVendorIdentifiers}
      />
    )

    // Check if component renders the correct count text
    expect(screen.getByText(`${initialSelectedVendors.length} of ${vendors.length} vendors selected`)).toBeInTheDocument()
    
    // Check if all vendor buttons are rendered
    const vendorButtons = screen.getAllByRole("button")
    expect(vendorButtons.length).toBe(vendors.length)
    
    // Check if all vendor images are present
    vendors.forEach(vendor => {
      expect(screen.getByAltText(`${vendor.name} icon`)).toBeInTheDocument()
      expect(screen.getByText(vendor.name)).toBeInTheDocument()
    })
  })

  test("selected vendors have proper styling", () => {
    render(
      <VendorSelector
        selectedVendorIdentifiers={initialSelectedVendors}
        setSelectedVendorIdentifiers={mockSetSelectedVendorIdentifiers}
      />
    )

    // Get the first vendor to test
    const firstVendor = vendors[0]
    const firstVendorIdentifier = getVendorIdentifier(firstVendor)
    
    // Find the button for the first vendor
    const vendorButton = screen.getByTitle(firstVendor.name)
    
    // Check if it has border-pink-500 class (selected state)
    expect(vendorButton.className).toContain("border-pink-500")
    
    // Check if the checkmark is visible
    const checkmark = vendorButton.querySelector('[class*="scale-100"]')
    expect(checkmark).not.toBeNull()
    
    // Check if the image is not greyscale (doesn't have the grayscale filter class)
    const img = screen.getByAltText(`${firstVendor.name} icon`)
    expect(img.className).not.toContain("grayscale")
  })

  test("toggling a vendor calls setSelectedVendorIdentifiers", async () => {
    render(
      <VendorSelector
        selectedVendorIdentifiers={initialSelectedVendors}
        setSelectedVendorIdentifiers={mockSetSelectedVendorIdentifiers}
      />
    )

    // First vendor button
    const firstVendor = vendors[0]
    const vendorButton = screen.getByTitle(firstVendor.name)
    
    // Click the button to toggle selection
    fireEvent.click(vendorButton)
    
    // Check if setSelectedVendorIdentifiers was called with the updated array
    // The first call is from the useEffect, the second from the click
    expect(mockSetSelectedVendorIdentifiers).toHaveBeenCalledTimes(2)
  })

  test("handles empty selection correctly", () => {
    render(
      <VendorSelector
        selectedVendorIdentifiers={[]}
        setSelectedVendorIdentifiers={mockSetSelectedVendorIdentifiers}
      />
    )

    // Check if component renders the correct count text for empty selection
    expect(screen.getByText(`0 of ${vendors.length} vendors selected`)).toBeInTheDocument()
    
    // Check that none of the vendors have the selected style
    const vendorButtons = screen.getAllByRole("button")
    vendorButtons.forEach(button => {
      expect(button.className).not.toContain("border-pink-500")
    })
  })

  test("unselected vendors have greyscale styling", () => {
    // Render with only the first vendor selected
    const firstVendorIdentifier = getVendorIdentifier(vendors[0])
    
    render(
      <VendorSelector
        selectedVendorIdentifiers={[firstVendorIdentifier]}
        setSelectedVendorIdentifiers={mockSetSelectedVendorIdentifiers}
      />
    )

    // Get the second vendor which should be unselected
    const secondVendor = vendors[1]
    
    // Check that the second vendor's image has grayscale class
    const secondVendorImg = screen.getByAltText(`${secondVendor.name} icon`)
    expect(secondVendorImg.className).toContain("grayscale")
    
    // Check that the second vendor's button doesn't have selected styles
    const secondVendorButton = screen.getByTitle(secondVendor.name)
    expect(secondVendorButton.className).not.toContain("border-pink-500")
  })
})
