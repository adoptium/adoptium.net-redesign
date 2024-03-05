import React from "react"
import herobgmoble from "../../img/Eclipse-Misson-mobile-img.png"
import { Link } from "gatsby"
import { FaApple } from "react-icons/fa"

const HeroSection = () => {
  return (
    <div>
      <div className="bg-purple sm:bg-contain bg-eclipse-misson-hero bg-center bg-no-repeat relative lg:mb-8">
        <div className="relative isolate">
          <div className="max-w-[414px] w-full  absolute sm:hidden top-[80px] z-[-1] left-[50%] translate-x-[-50%]">
            <img className="w-full h-full " src={herobgmoble} alt="" />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="max-w-[1264px] mx-auto flex justify-center items-center">
            <div className="mx-auto max-w-[832px] w-full h-[680px] sm:h-[720px] px-8 lg:px-0 flex items-center">
              <div className="text-center w-full mt-20 md:mt-12">
                <h1 className="font-semibold leading-[112.5%] lg:leading-[115.385%] text-white text-[64px] lg:text-[104px]">
                  Eclipse Misson Control
                </h1>
                <p className="lg:my-10 mt-6  mb-10 text-[22px] leading-[127.273%] md:text-2xl md:leading-[133.333%] text-white  font-semibold">
                  Download AQAvit for macOS aarch64
                </p>
                <div className="mt-10 flex items-center sm:flex-row flex-col-reverse justify-center gap-6">
                  <Link
                    to="#"
                    className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out  border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-base"
                  >
                    <FaApple size={25} />
                    Download AQAvit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
