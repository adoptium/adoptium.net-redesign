import { Link } from "gatsby"
import React from "react"
import { GithubIcon3 } from "../Common/Icon"
import ourmamberbgtop from "../../img/our-mamber-bg.png"
import ourmamberbgbottom from "../../img/our-mamber-bg2.png"
import Slider from "react-slick"

const OurMamber = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    vertical: true, // Set to false for horizontal direction
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }
  return (
    <div className="bg-[#0E002A]">
      <div className="max-w-[1248px] mx-auto px-6 py-16 md:py-40">
        <div className="flex flex-wrap justify-between items-center gap-10 md:gap-4">
          <div className="max-w-[460px] w-full">
            <h2 className="md:text-5xl text-[36px] font-semibold leading-[122.222%] md:leading-[116.667%]">
              Our Members
            </h2>
            <p className="md:mt-6 mt-10 mb-5 text-lightgrey tab-button-text">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java runtime binaries that are enterprise-ready and
              Java SE TCK-tested for general use in the Java ecosystem.
            </p>

            <div className="  mt-8">
              <Link to={""}>
                <button className="bg-transparent  border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-border ">
                  Our Members
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center gap-7 max-w-[685px] w-full h-[400px] overflow-hidden ">
            <img
              className="absolute z-50 top-[-2px]"
              src={ourmamberbgtop}
              alt=""
            />

            <Slider
              {...settings}
              className="flex !gap-6 w-[165px] md:w-[240px] min-h-[100px]"
            >
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="w-[132px] md:w-[240px] min-h-[100px] mb-5 !flex !justify-center !items-center rounded-[20px] bg-white cursor-pointer"
                >
                  <GithubIcon3 />
                </div>
              ))}
            </Slider>

            <Slider
              {...settings}
              className="flex !gap-6 w-[165px] md:w-[240px] min-h-[100px]"
            >
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="w-[132px] md:w-[240px] min-h-[100px] mb-5 !flex !justify-center !items-center rounded-[20px] bg-white cursor-pointer"
                >
                  <GithubIcon3 />
                </div>
              ))}
            </Slider>

            <img
              className="absolute z-50 bottom-[-2px] mb-0"
              src={ourmamberbgbottom}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMamber
