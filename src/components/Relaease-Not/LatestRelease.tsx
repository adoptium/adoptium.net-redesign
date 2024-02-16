import React from "react"
import CommonHeading from "../Common/CommonHeading"
import OurMamberFooter from "../Business-Benefits2/OurMamberFooter"
import { AdobeIcon2, RedIcon } from "../Common/Icon"
import { Link } from "gatsby"
import { FaApple } from "react-icons/fa"
import CommonButton from "../Common/CommonButton"

const LatestRelease = () => {
  return (
    <div className="py-6 md:py-20 px-6 max-w-[1264px] mx-auto">
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
              <CommonButton className={"!w-[175px] !mt-2"} icon={undefined}>
                See all Releases
              </CommonButton>
            </div>
          </div>
        </div>
        <div className="sm:max-w-[300px] mx-auto w-full">
          <div className="p-8 border-[2px] border-primary bg-[#200D46] rounded-3xl w-full ">
            <AdobeIcon2 />
            <h2 className="text-primary text-base leading-6 mt-7 font-normal flex items-center gap-x-3">
              <span className="">
                <RedIcon />
              </span>
              Latest Release
            </h2>

            <p className="text-white text-2xl font-normal leading-8 mt-2">
              jdk-21+35 - Temurin
            </p>
            <span className="text-base text-lightgrey font-normal leading-6 block mt-4">
              Release Date: 12 October 2023
            </span>
            <h5 className="text-base text-lightgrey font-normal leading-6 block mt-4">
              Build Date: 12 October 2023 • macOS • aarch64
            </h5>
            <Link
              to={""}
              className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-primary border ease-in-out border-primary flex items-center justify-center gap-3 w-[169px] h-[56px] text-white font-bold leading-6 text-base mt-8"
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
