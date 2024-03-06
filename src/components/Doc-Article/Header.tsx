import React from "react"
import herobg from "../../img/Page-Header-bg.png"

const Header = () => {
  return (
    <div className=" relative  pb-8 pt-28 md:pb-16 md:pt-36  overflow-hidden">
      <img
        className="absolute top-0 left-0  z-[-10] right-0 w-full h-full"
        src={herobg}
        alt=""
      />

      <div className="mx-auto max-w-[1048px] w-full px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="self-stretch flex-col justify-center items-center gap-6 flex">
          <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
            <h1 className="self-stretch text-center text-white   text-[36px] lg:text-[48px] leading-[122.222%] md:leading-[116.667%] font-semibold">
              AQAvit™ Verification
            </h1>
          </div>
          <div className="self-stretch   text-center text-lightgrey  text-[20px] font-normal   leading-[140%] max-w-[860px] mx-auto">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
