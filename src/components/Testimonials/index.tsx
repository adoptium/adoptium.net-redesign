import React, { useState, useEffect } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { AsanaSlider, GithubSlider, GoogleSlider, SlackSlider } from "./Icons"

import "./Testimonials.scss"

const testimonialData = [
  {
    quote:
      "In talking with Azul, the trust came quickly, and was continually reinforced by the excellent support we received. Azul gives us peace of mind. ",
    name: "Joe Bloggs",
    role: "CEO at GitHub",
    image:
      "https://th.bing.com/th/id/OIP.sYE4E2Y8K4hHU21bS0zx2QHaH4?rs=1&pid=ImgDetMain",
  },
  {
    quote:
      "In talking with Azul, the trust came quickly, and was continually reinforced by the excellent support we received. Azul gives us peace of mind. ",
    name: "Jane Doe",
    role: "CTO at Asana",
    image:
      "https://th.bing.com/th/id/OIP.EhdrnPDN08Vtj8MgbvlOxQHaHa?rs=1&pid=ImgDetMain?",
  },
  {
    quote:
      "In talking with Azul, the trust came quickly, and was continually reinforced by the excellent support we received. Azul gives us peace of mind. ",
    name: "Jane Doe",
    role: "Cleaner at Google",
    image:
      "https://th.bing.com/th/id/OIP.EhdrnPDN08Vtj8MgbvlOxQHaHa?rs=1&pid=ImgDetMain?",
  },
  {
    quote:
      "In talking with Azul, the trust came quickly, and was continually reinforced by the excellent support we received. Azul gives us peace of mind. ",
    name: "Jane Doe",
    role: "Slacker at Slack",
    image:
      "https://th.bing.com/th/id/OIP.EhdrnPDN08Vtj8MgbvlOxQHaHa?rs=1&pid=ImgDetMain?",
  },
]

const Testimonials = ({ className }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [slideDirection, setSlideDirection] = useState("right")

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonialData.length)
    }, 8000) // Changes every 8 seconds

    return () => clearTimeout(timer)
  }, [currentTestimonial])

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonialData.length)
    setSlideDirection("right")
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonialData.length) %
        testimonialData.length,
    )
    setSlideDirection("left")
  }

  const testimonial = testimonialData[currentTestimonial]
  const testimonialClassName =
    slideDirection === "right" ? "slide-in-right" : "slide-in-left"
  const testimonialKey = `${currentTestimonial}-${slideDirection}`
  const logoSliderChangeHandler = value => {
    if (value === currentTestimonial) {
      return
    } else {
      setCurrentTestimonial(value)
      if (currentTestimonial > value) {
        setSlideDirection("left")
      } else {
        setSlideDirection("right")
      }
    }
  }

  return (
    <section
      className={`bg-[#0E002A] overflow-x-hidden border-t border-[#3E3355] ${className}`}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto" key={testimonialKey}>
          <svg
            className="h-12 mx-auto mb-3 text-pink text-pink-400"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote
            className={testimonialClassName}
            style={{ minHeight: "204px" }}
          >
            <span className="md:text-[32px] text-[26px] leading-[34px] md:leading-10 font-semibold  text-white">
              {testimonial.quote}
            </span>
          </blockquote>
          <figcaption className="flex items-center justify-center md:mt-6 mt-0 space-x-3">
            <img
              className="w-6 h-6 mb-0 rounded-full"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 text-pink font-medium text-pink-900">
                {testimonial.name}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </div>
            </div>
          </figcaption>
        </figure>
        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3 items-center max-w-screen-md mx-auto">
          <button
            className="arrow-button p-2 border-[#3E3355] border-[3px]"
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
          >
            <FaArrowLeft size={20} strokeWidth={1} />
          </button>
          <button
            className="arrow-button  relative arrow-button-progress p-2 "
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
          >
            <FaArrowRight size={20} strokeWidth={1} />
            <div className="progress-border absolute "></div>
          </button>
        </div>
        <div className="max-w-[896px] mx-auto flex flex-wrap justify-center items-center mt-10 gap-6 md:space-x-16">
          <button
            onClick={() => logoSliderChangeHandler(0)}
            aria-label="GitHub Testimonial"
          >
            <GithubSlider current={currentTestimonial} />
          </button>
          <button
            onClick={() => logoSliderChangeHandler(1)}
            aria-label="Aana Testimonial"
          >
            <AsanaSlider current={currentTestimonial} />
          </button>
          <button
            onClick={() => logoSliderChangeHandler(2)}
            aria-label="Google Testimonial"
          >
            <GoogleSlider current={currentTestimonial} />
          </button>
          <button
            onClick={() => logoSliderChangeHandler(3)}
            aria-label="Slack Testimonial"
          >
            <SlackSlider current={currentTestimonial} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
