import React, { useRef, useEffect } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react"
import "swiper/swiper-bundle.css"
import SwiperCore from "swiper"
import { Navigation } from "swiper/modules"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import { RedIcon } from "../Common/Icon"

SwiperCore.use([Navigation])

const LatestNewsSlider = ({ newsmap }) => {
  const swiperRef = useRef<SwiperRef>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.init()
    }
  }, [])

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <div className="overflow-hidden pl-6 max-w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        className="mySwiper lg:hidden"
      >
        {newsmap.map((card, index) => (
          <SwiperSlide className={`!w-[256px] newscard p-6 m-auto`} key={index}>
            <h2 className="text-primary text-base leading-6 font-bold m-0 flex items-center gap-x-3">
              <RedIcon />
                News
            </h2>
            <p className="text-white text-xl  font-normal leading-7 mt-6">
                {card.node.frontmatter.title}
            </p>
            <span className="text-sm text-grey font-normal leading-5 block mt-2 mb-6">
                {card.node.frontmatter.date}
            </span>
            <Link
              to={card.node.fields.postPath}
              className="py-3 text-base underline font-bold leading-6 text-white mt-2 block border-white w-fit"
            >
              Read More
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-4 items-center justify-center mt-16 mb-8">
        <button onClick={handlePrev} className="text-white">
          <FiArrowLeftCircle size={50} strokeWidth={1} />
        </button>
        <button onClick={handleNext} className="text-white">
          <FiArrowRightCircle size={50} strokeWidth={1} />
        </button>
      </div>
    </div>
  )
}

export default LatestNewsSlider
