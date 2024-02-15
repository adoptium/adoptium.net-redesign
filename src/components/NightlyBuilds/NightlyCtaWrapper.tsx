import React from "react"
import CtaWrapper from "../Common/CtaWrapper"

const NightlyCtaWrapper = () => {
  return (
    <>
      <div className="w-full gap-4 px-6 mb-8 xl:px-0 justify-between max-w-[1264px] mx-auto items-center hidden sm:flex ">
        <div className="h-[1px] bg-[#3E3355] w-full "></div>
        <h5 className="whitespace-nowrap text-base font-normal  text-[#C4BFCE]">
          64 bit
        </h5>
        <div className="h-[1px] bg-[#3E3355] w-full "></div>
      </div>
      <CtaWrapper />
    </>
  )
}

export default NightlyCtaWrapper
