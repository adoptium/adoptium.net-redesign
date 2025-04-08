import React from "react"
import Slider from "react-slick"

import Adopters from "../../json/adopters.json"

const featuredAdopters = Adopters.filter(adopter => adopter.featured)

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
        Temurin is trusted by millions of developers
      </h2>
      <Slider {...settings} className="mt-6">
        {featuredAdopters.map((adopter, index) => (
          <span key={index} className="px-4">
            <img
              src={`/images/${adopter.logo_white}`}
              alt={adopter.name}
              className="h-12 lg:h-16 w-auto object-contain mx-auto"
              style={{ padding: adopter.logoPadding || 0 }}
            />
          </span>
        ))}
      </Slider>
    </div>
  )
}

export default LogoCarousel
