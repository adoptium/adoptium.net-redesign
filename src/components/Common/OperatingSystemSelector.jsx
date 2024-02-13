import React from "react"
import CommonSelector from "./CommonSelector"

const OperatingSystemSelector = ({ operatingSystem, svgComponent }) => {
  const dropdownOptions = [
    "Package: Standard JDK 1",
    "Package: Standard JDK 2",
    "Package: Standard JDK 3",
  ]
  return (
    <div>
      <div className="p-6 bg-[#2B1A4F] flex flex-col rounded-[24px] gap-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-start items-center">
            {svgComponent}
            <h5 className="text-2xl font-semibold leading-[32px]">
              {operatingSystem}
            </h5>
          </div>

          {/* ========================================= USESTATE ===================================== */}
          <div className="flex gap-4"></div>
        </div>
        <CommonSelector
          options={dropdownOptions}
          title="Package: Standard JDK"
        />
      </div>
    </div>
  )
}

export default OperatingSystemSelector
