import React, { useEffect, useRef } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import SwiperCore from "swiper"
import { Navigation } from "swiper/modules"

import "swiper/swiper-bundle.css"
import "./Features.scss"

SwiperCore.use([Navigation])

const Features = () => {
  const features = [
    {
      id: 1,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
    {
      id: 2,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
    {
      id: 3,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
    {
      id: 4,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
  ]

  const swiperRef = useRef<SwiperRef>(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update()
    }
  }, [features])

  const handlePrevbase = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextbase = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <div className="temurin-features">
      <div className=" lg:py-14 sm:py-18  mx-auto w-full">
        <div className="mx-auto lg:pl-[88px] pl-6 w-full flex lg:flex-row flex-col items-start lg:items-end justify-center lg:space-x-8 xl:space-x-16 relative overflow-hidden">
          <div className="max-w-[600px] w-full flex flex-col justify-between mb-16 lg:mb-0">
            <div>
              <h2 className="text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
                OpenJDK-Based
              </h2>
              <h3 className="text-xl font-normal leading-7 text-grey mt-6 mb-8">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime binaries that are enterprise-ready and
                Java SE TCK-tested for general use in the Java ecosystem.
              </h3>
              <Link to="/temurin/releases">
                <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[212px] h-[48px] ">
                  Download Temurin™
                </button>
              </Link>
            </div>
            <div className="lg:flex gap-4 items-center mt-16 hidden">
              <button
                onClick={handlePrevbase}
                className="text-white"
                aria-label="Previous Feature"
              >
                <FiArrowLeftCircle size={50} strokeWidth={1} />
              </button>
              <button
                onClick={handleNextbase}
                className="text-white"
                aria-label="Next Feature"
              >
                <FiArrowRightCircle size={50} strokeWidth={1} />
              </button>
            </div>
          </div>
          <Swiper
            loop={true}
            slidesPerView={"auto"}
            className="mySwiperbase w-full"
            breakpoints={{
              320: {
                spaceBetween: 16,
              },
              1024: {
                spaceBetween: 32,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            ref={swiperRef}
          >
            {features.map((feature, index) => (
              <SwiperSlide
                className="!w-[256px] p-8 lg:p-16 lg:w-[256px] newscard"
                key={index}
              >
                <span>
                  <img src="/images/icons/lock.svg" alt="lock" />
                </span>
                <div className=" space-y-6 mt-[106px]">
                  <h2 className="text-white text-2xl leading-6 font-bold m-0 flex items-center gap-x-3">
                    {feature.heading}
                  </h2>
                  <p className="text-grey text-l font-normal leading-7 mt-6">
                    {feature.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>{" "}
          <div className="flex gap-4 items-center my-8  w-full justify-center lg:hidden">
            <button onClick={handlePrevbase} className="text-white">
              <FiArrowLeftCircle
                size={50}
                strokeWidth={1}
                aria-label="Previous Feature"
              />
            </button>
            <button onClick={handleNextbase} className="text-white">
              <FiArrowRightCircle
                size={50}
                strokeWidth={1}
                aria-label="Next Feature"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
