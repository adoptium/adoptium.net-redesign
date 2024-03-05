import React from "react"
import { RedIcon } from "../Common/Icon"
import herobg from "../../img/Page-Header-bg.png"

const Header = () => {
  return (
    <div className=" relative  pt-36 pb-16 md:pb-32 md:pt-52  overflow-hidden">
      <img
        className="absolute top-0 left-0  z-[-10] right-0 w-full h-full"
        src={herobg}
        alt=""
      />

      <div className="mx-auto max-w-[1048px] w-full px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="self-stretch flex-col justify-center items-center gap-6 flex">
          <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <RedIcon />
              <div className="text-rose-600 text-base font-bold leading-normal">
                Documentation
              </div>
            </div>

            <h1 className="self-stretch text-center text-white   text-[36px] lg:text-[80px] leading-[122.222%] md:leading-[120%] font-semibold">
              Documentation
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
