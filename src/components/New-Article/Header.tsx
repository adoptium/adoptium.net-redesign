import React from "react"
import { RedIcon } from "../Common/Icon"
import Avtar from "../../img/contributor2.png"

const Header = () => {
  return (
    <div className="   pt-28 pb-16  md:pt-52  overflow-hidden">
      <div className="mx-auto max-w-[1048px] w-full px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="self-stretch flex-col justify-center items-center gap-5 flex">
          <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <RedIcon />
              <div className="text-rose-600 text-base font-bold leading-normal">
                News article
              </div>
            </div>

            <h1 className="self-stretch text-center text-white   text-[36px] lg:text-[48px] leading-[122.222%] lg:leading-[116.667%] font-semibold">
              Community Day for Java Developers
            </h1>
          </div>
          <p className="self-stretch  mb-0  text-center text-lightgrey  text-[20px] font-normal   leading-[140%] max-w-[860px] mx-auto">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </p>
          <div className="flex justify-center items-center gap-5">
            <img className="max-w-[48px] mb-0" src={Avtar} alt="" />
            <h3 className="text-[16px] font-bold leading-[150%] text-white">
              <span className="text-primary">Travis Spencer,</span> CEO
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
