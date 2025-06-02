import React from "react"
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react"
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import Testimonials from "../index"

describe("Testimonials component", () => {
  // Setup timers for tests that need them
  const setupTimers = () => {
    vi.useFakeTimers()
  }

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it("should render correctly", () => {
    const { container } = render(<Testimonials />)
    expect(container).toMatchSnapshot()
  })

  it("displays the first testimonial initially", () => {
    render(<Testimonials />)
    
    // Check if the first testimonial content is displayed
    expect(screen.getByText(/Microsoft is proud to be a Strategic Member/)).toBeTruthy()
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    expect(screen.getByText("Principal Group Manager - Java & Go @ Microsoft")).toBeTruthy()
  })

  it("displays navigation controls", () => {
    render(<Testimonials />)
    
    // Check for navigation buttons
    expect(screen.getByLabelText("Previous Testimonial")).toBeTruthy()
    expect(screen.getByLabelText("Next Testimonial")).toBeTruthy()
    
    // Check for progress indicators
    expect(screen.getByLabelText("Go to testimonial 1")).toBeTruthy()
    expect(screen.getByLabelText("Go to testimonial 2")).toBeTruthy()
    expect(screen.getByLabelText("Go to testimonial 3")).toBeTruthy()
    expect(screen.getByLabelText("Go to testimonial 4")).toBeTruthy()
  })

  it("navigates to next testimonial when next button is clicked", () => {
    render(<Testimonials />)
    
    // Initial state - Microsoft testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // Click next button
    const nextButton = screen.getByLabelText("Next Testimonial")
    fireEvent.click(nextButton)
    
    // Should show Alibaba testimonial
    expect(screen.getByText("Sanhong Li")).toBeTruthy()
    expect(screen.getByText(/As a member of the Adoptium Working Group, Alibaba Cloud/)).toBeTruthy()
  })

  it("navigates to previous testimonial when previous button is clicked", () => {
    render(<Testimonials />)
    
    // Click previous button (should wrap to last testimonial)
    const prevButton = screen.getByLabelText("Previous Testimonial")
    fireEvent.click(prevButton)
    
    // Should show Azul testimonial (last one)
    expect(screen.getByText("Mark Little")).toBeTruthy()
    expect(screen.getByText("VP Middleware Engineering, Red Hat")).toBeTruthy()
  })

  it("navigates using progress indicators", () => {
    render(<Testimonials />)
    
    // Initial state - first testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // Click on third progress indicator
    const fourthIndicator = screen.getByLabelText("Go to testimonial 4")
    fireEvent.click(fourthIndicator)
    
    // Should show Red Hat testimonial
    expect(screen.getByText("Mark Little")).toBeTruthy()
    expect(screen.getByText(/As a leading provider of enterprise open source software/)).toBeTruthy()
  })

  it("navigates using company logos", () => {
    render(<Testimonials />)
    
    // Initial state - Microsoft testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // Click on Alibaba logo
    const alibabaButton = screen.getByLabelText("Alibaba Cloud Testimonial")
    fireEvent.click(alibabaButton)
    
    // Should show Alibaba testimonial
    expect(screen.getByText("Sanhong Li")).toBeTruthy()
    expect(screen.getByText("Director of Compiler & Runtime, Alibaba Cloud Intelligence")).toBeTruthy()
  })

  it("auto-advances testimonials after 8 seconds", async () => {
    setupTimers()
    render(<Testimonials />)
    
    // Initial state - Microsoft testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // Fast-forward 8 seconds
    act(() => {
      vi.advanceTimersByTime(8000)
    })
    
    // Should now show Alibaba testimonial
    await waitFor(() => {
      expect(screen.getByText("Sanhong Li")).toBeTruthy()
    })
  })

  it("cycles through all testimonials automatically", async () => {
    setupTimers()
    render(<Testimonials />)
    
    // Start with Microsoft
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // After 8 seconds -> Alibaba
    act(() => {
      vi.advanceTimersByTime(8000)
    })
    await waitFor(() => {
      expect(screen.getByText("Sanhong Li")).toBeTruthy()
    })
    
    // After another 8 seconds -> Azul
    act(() => {
      vi.advanceTimersByTime(8000)
    })
    await waitFor(() => {
      expect(screen.getByText("Simon Ritter")).toBeTruthy()
    })

    // After another 8 seconds -> Red Hat
    act(() => {
      vi.advanceTimersByTime(8000)
    })
    await waitFor(() => {
      expect(screen.getByText("Mark Little")).toBeTruthy()
    })

    // After another 8 seconds -> back to Microsoft
    act(() => {
      vi.advanceTimersByTime(8000)
    })
    await waitFor(() => {
      expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    })
  })

  it("resets auto-advance timer when manually navigating", async () => {
    setupTimers()
    render(<Testimonials />)
    
    // Initial state - Microsoft testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // Fast-forward 4 seconds (halfway to auto-advance)
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    
    // Manually navigate to next
    const nextButton = screen.getByLabelText("Next Testimonial")
    fireEvent.click(nextButton)
    
    // Should show Alibaba testimonial
    expect(screen.getByText("Sanhong Li")).toBeTruthy()
    
    // Fast-forward another 4 seconds (should not auto-advance yet since timer was reset)
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    
    // Should still be on Alibaba
    expect(screen.getByText("Sanhong Li")).toBeTruthy()
    
    // Fast-forward another 4 seconds to complete the 8-second cycle
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    
    // Now should auto-advance to Azul
    await waitFor(() => {
      expect(screen.getByText("Simon Ritter")).toBeTruthy()
    })
  })

  it("handles clicking on the same progress indicator", () => {
    render(<Testimonials />)
    
    // Initial state - first testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
    
    // Click on first progress indicator (current one)
    const firstIndicator = screen.getByLabelText("Go to testimonial 1")
    fireEvent.click(firstIndicator)
    
    // Should remain on Microsoft testimonial
    expect(screen.getByText("Martijn Verburg")).toBeTruthy()
  })

  it("has proper accessibility attributes", () => {
    render(<Testimonials />)
    
    // Check for proper ARIA labels
    expect(screen.getByLabelText("Previous Testimonial")).toBeTruthy()
    expect(screen.getByLabelText("Next Testimonial")).toBeTruthy()
    expect(screen.getByLabelText("Microsoft Testimonial")).toBeTruthy()
    expect(screen.getByLabelText("Alibaba Cloud Testimonial")).toBeTruthy()
    expect(screen.getByLabelText("Azul Systems Testimonial")).toBeTruthy()
    expect(screen.getByLabelText("Red Hat Testimonial")).toBeTruthy()
    
    // Check for proper alt text on images
    expect(screen.getByAltText("Martijn Verburg")).toBeTruthy()
    expect(screen.getByAltText("Microsoft")).toBeTruthy()
    expect(screen.getByAltText("Alibaba Cloud")).toBeTruthy()
    expect(screen.getByAltText("Azul Systems")).toBeTruthy()
    expect(screen.getByAltText("Red Hat")).toBeTruthy()
  })

  it("renders all testimonial data correctly", () => {
    render(<Testimonials />)
    
    const testimonials = [
      {
        name: "Martijn Verburg",
        role: "Principal Group Manager - Java & Go @ Microsoft",
        company: "Microsoft"
      },
      {
        name: "Sanhong Li", 
        role: "Director of Compiler & Runtime, Alibaba Cloud Intelligence",
        company: "Alibaba Cloud"
      },
      {
        name: "Simon Ritter",
        role: "Deputy CTO at Azul Systems", 
        company: "Azul Systems"
      },
      {
        name: "Mark Little",
        role: "VP Middleware Engineering, Red Hat", 
        company: "Red Hat"
      }
    ]
    
    testimonials.forEach((testimonial) => {
      // Navigate to each testimonial
      const companyButton = screen.getByLabelText(`${testimonial.company} Testimonial`)
      fireEvent.click(companyButton)
      
      // Check if testimonial data is displayed
      expect(screen.getByText(testimonial.name)).toBeTruthy()
      expect(screen.getByText(testimonial.role)).toBeTruthy()
      expect(screen.getByAltText(testimonial.name)).toBeTruthy()
      expect(screen.getByAltText(testimonial.company)).toBeTruthy()
    })
  })

  it("displays correct testimonial structure", () => {
    render(<Testimonials />)
    
    // Check that the main elements exist
    expect(screen.getByRole("blockquote")).toBeTruthy()
    expect(screen.getByRole("figure")).toBeTruthy()
    
    // Check that images have proper styling containers
    const profileImage = screen.getByAltText("Martijn Verburg")
    expect(profileImage.className).toContain("rounded-full")
    
    // Check that company logos exist
    const microsoftLogo = screen.getByAltText("Microsoft")
    expect(microsoftLogo).toBeTruthy()
  })
})
