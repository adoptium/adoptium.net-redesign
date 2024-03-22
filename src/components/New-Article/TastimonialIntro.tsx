import React, { useEffect, useState } from "react"
import Avtar from "../../img/contributor2.png"

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
const TastimonialIntro = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [slideDirection, setSlideDirection] = useState("right")

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonialData.length)
    }, 5000) // Changes every 8 seconds

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
    <section className={` overflow-x-hidden   `}>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:pt-16 lg:pb-12 lg:px-6">
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
            style={{ minHeight: "" }}
          >
            <span className="md:text-[32px] text-[26px] leading-[130.769%] md:leading-[125%] font-semibold  text-white">
              {testimonial.quote}
            </span>
          </blockquote>
          <div className="flex justify-center items-center gap-5 pt-6 md:pt-8">
            <img className="max-w-[48px] mb-0" src={Avtar} alt="" />
            <h3 className="text-[16px] font-bold leading-[150%] text-white">
              <span className="text-primary">Travis Spencer,</span> CEO
            </h3>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default TastimonialIntro
