import React from "react"
import CommonHeading from "../Common/CommonHeading"
import OurMamberFooter from "../Business-Benefits2/OurMamberFooter"
import { RedIcon } from "../Common/Icon"
import { Link } from "gatsby"
import { FaApple } from "react-icons/fa"

const LatestRelease = () => {
  return (
    <div className="py-6 md:py-20 px-4 max-w-[1264px] mx-auto">
      <div className="flex items-center  flex-wrap gap-14">
        <div className="w-full lg:w-[60%]">
          <CommonHeading
            title="Latest Release Note"
            description={
              "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
            }
            className={"text-center lg:text-start"}
          />
          <div>
            <div className="flex justify-center lg:justify-between flex-wrap items-center gap-5 md:gap-14 mt-10">
              <p className="text-[20px] font-hanken leading-[28px] text-white my-0 text-center">
                Eclipse Temurin offers high-performance
              </p>
              <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
                See all Releases
              </button>
            </div>
          </div>
        </div>
        <div className="sm:max-w-[290px] mx-auto w-full">
          <div className="p-8 border-[2px] border-[#FF1464]  rounded-3xl w-full ">
            <h2 className="text-primary text-base leading-6 font-normal flex items-center gap-x-3">
              <span className="">
                <RedIcon />
              </span>
              Latest Release
            </h2>

            <p className="text-white text-2xl font-normal leading-8 mt-2">
              jdk-21+35 - Temurin
            </p>
            <span className="text-base text-[#C4BFCE] font-normal leading-6 block mt-4">
              Release Date: 12 October 2023
            </span>
            <h5 className="text-base text-[#C4BFCE] font-normal leading-6 block mt-4">
              Build Date: 12 October 2023 • macOS • aarch64
            </h5>
            <Link
              to={""}
              className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out border-[#FF1464] flex items-center justify-center gap-3 w-[169px] h-[56px] text-white font-bold leading-6 text-base mt-8"
            >
              <span>
                <FaApple />
              </span>
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestRelease
