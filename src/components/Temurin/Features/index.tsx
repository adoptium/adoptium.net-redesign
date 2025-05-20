import React, { useEffect, useRef } from "react"
import { Link } from "../../Link"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import SwiperCore from "swiper"
import { Navigation } from "swiper/modules"

import "./Features.scss"

SwiperCore.use([Navigation])

const Features = () => {
  const features = [
    {
      heading: "Secure Supply Chain",
      content:
        "Built with robust security standards, ensuring a trusted, transparent, and vulnerability-free supply chain.",
      img: "/images/icons/lock.svg" 
    },
    {
      heading: "AQAvit Verification",
      content:
        "Thoroughly tested using AQAvit to guarantee performance, reliability, and security in every build.",
      img: "/images/initiatives/testing.svg"
    },
    {
      heading: "Performance Optimization",
      content:
        "Engineered for optimal performance, delivering speed, efficiency, and stability across diverse environments.",
      img: "/images/initiatives/deploy.svg"
    },
    {
      heading: "Cross-Platform Consistency",
      content:
        "Consistent behavior and builds across all major operating systems and hardware architectures.",
      img: "/images/initiatives/release.svg"
    },
    {
      heading: "Community-Driven Development",
      content:
        "Eclipse Adoptium projects are shaped by a vibrant, global community that is continuously improving and innovating.",
      img: "/images/initiatives/community.svg"
    },
    {
      heading: "Enterprise-Ready Support",
      content:
        "Backed by enterprise-grade commercial supporters, ensuring seamless integration, scalability, and long-term sustainability.",
      img: "/images/initiatives/security.svg"
    }
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
                <Trans>Prebuilt OpenJDK Binaries for Free!</Trans>
              </h2>
              <h3 className="text-xl font-normal leading-7 text-grey mt-6 mb-8">
                <Trans i18nKey='Intro'>
                  Java&trade; is the world's leading programming language and platform. The Adoptium Working Group promotes and supports high-quality, TCK certified runtimes and associated technology for use across the Java ecosystem. Eclipse Temurin is the name of the OpenJDK distribution from Adoptium.
                </Trans>
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
                className="!w-[256px] p-8 lg:p-16 lg:w-[256px] bg-white/5 rounded-3xl border border-white/50 backdrop-blur-xl h-[300px] flex flex-col"
                key={index}
              >
                <div className="flex-shrink-0">
                  <img src={feature.img} alt={feature.heading} className="h-[64px] w-auto" />
                </div>
                <div className="flex flex-col justify-between flex-grow mt-10">
                  <div>
                    <h2 className="text-white text-2xl leading-6 font-bold m-0 flex items-center gap-x-3 mb-4">
                      {feature.heading}
                    </h2>
                    <p className="text-grey text-l font-normal leading-7 mt-6">
                      {feature.content}
                    </p>
                  </div>
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
