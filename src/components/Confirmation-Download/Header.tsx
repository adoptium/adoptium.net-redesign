import React from "react"
import { RedIcon } from "../Common/Icon"
import herobg from "../../img/Page-Header-bg.png"

const Header = () => {
  return (
    <div className=" relative  pt-40 pb-16 md:pb-36 md:pt-60  overflow-hidden">
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
                Download Success
              </div>
            </div>
            <div
              className={`self-stretch text-center text-white   text-[56px] lg:text-[80px] leading-[114.286%] md:leading-[120%] font-semibold`}
            >
              <h1>Thank you for your download!</h1>
            </div>
          </div>
          <div
            className={`self-stretch   text-center text-lightgrey  text-[20px] font-normal   leading-[140%] `}
          >
            You are downloading an Eclipse Temurin build, the open-source
            community build from the Eclipse Adoptium Working Group. If the
            download doesn't start in a few seconds, please{" "}
            <span className="text-primary underline !underline-offset-[1px]">
              click here
            </span>{" "}
            to start the download.
          </div>
          <button className="bg-primary text-white tab-button-text px-6 py-4 rounded-[80px] mt-3">
            {" "}
            View checksum file
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
