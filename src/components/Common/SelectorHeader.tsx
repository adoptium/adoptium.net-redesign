import React from "react"
import CommonSelector from "./CommonSelector"

const SelectorHeader = () => {
  const dropdownOptions = ["Mac OS 1", "Mac OS 2", "Mac OS 3"]
  return (
    <>
      <div className="max-w-[1264px] mx-auto  w-full my-8">
        <button className="sm:hidden flex justify-between items-center w-full text-[16px] font-normal leading-[24px] px-4 py-3 rounded-[80px] border-[2px] border-[#3E3355]">
          Filter
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.16699V15.8337"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.16602 10H15.8327"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <div className="w-full lg:overflow-visible overflow-auto hidden sm:block">
          <div className="flex items-center gap-5 justify-between flex-nowrap min-w-[1039px]">
            <div className="flex flex-col gap-4 w-[260px]">
              <h3 className="text-[16px] font-normal leading-[24px] text-[#C4BFCE]">
                Operating System
              </h3>
              <CommonSelector options={dropdownOptions} title="Mac OS" />
            </div>
            <div className="flex flex-col gap-4 w-[260px]">
              <h3 className="text-[16px] font-normal leading-[24px] text-[#C4BFCE]">
                Architecture
              </h3>
              <CommonSelector options={dropdownOptions} title="aarch64" />
            </div>
            <div className="flex flex-col gap-4 w-[260px]">
              <h3 className="text-[16px] font-normal leading-[24px] text-[#C4BFCE]">
                Package Type
              </h3>
              <CommonSelector options={dropdownOptions} title="JDK" />
            </div>
            <div className="flex flex-col gap-4 w-[260px]">
              <h3 className="text-[16px] font-normal leading-[24px] text-[#C4BFCE]">
                Version
              </h3>
              <CommonSelector options={dropdownOptions} title="21 - LTS" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectorHeader
