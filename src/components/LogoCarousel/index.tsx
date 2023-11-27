import React from "react"
import Slider from "react-slick"

import {
  AdobeIcon,
  AsansIcon,
  GithubIcon,
  GoogleIcon,
  SlackIcon,
  TogglIcon,
} from "../Common/Icon"

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  }
  return (
    <div className=" max-w-[1160px] w-full mx-auto py-8 lg:py-16 xl:px-0 px-8  ">
      <h2 className="text-center text-xl font-normal leading-7 text-grey">
        Temurin has been adopted by over 30 companies
      </h2>
      <Slider {...settings} className="mt-6">
        <span className="px-4">
          <AdobeIcon />
        </span>
        <span className="px-4">
          <GithubIcon />
        </span>
        <span className="px-4">
          <AsansIcon />
        </span>
        <span className="px-4">
          <GoogleIcon />
        </span>
        <span className="px-4">
          <SlackIcon />
        </span>
        <span className="px-4">
          <TogglIcon />
        </span>
      </Slider>
    </div>
  )
}

export default LogoCarousel
