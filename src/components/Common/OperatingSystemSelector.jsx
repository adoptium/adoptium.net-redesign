import React, { useState } from "react"
import CommonSelector from "./CommonSelector"

const OperatingSystemSelector = ({
  operatingSystem,
  svgComponent,

  buttons,
}) => {
  const dropdownOptions = [
    { name: " Standard JDK" },
    { name: "Full JDK" },
    { name: "Lite JDK" },
    { name: "Standard JRE" },
    { name: "Full JRE" },
    { name: "CRaC JDK" },
  ]
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="p-6 bg-[#2B1A4F] flex flex-col rounded-[24px] gap-6 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-start items-center">
            {svgComponent}
            <h5 className="text-2xl font-semibold leading-[32px]">
              {operatingSystem}
            </h5>
          </div>

          {/* ========================================= USESTATE ===================================== */}
          <div className="flex gap-4">
            {buttons.map((data, index) => (
              <button key={index} onClick={() => setActive(index)}>
                <span
                  className={`py-3 w-full text-base font-normal leading-6 
                     outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === index ? "border-primary  border-b-[2px] text-white" : "text-[#8a809e] border-transparent  border-b"}`}
                >
                  {data.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <CommonSelector list={dropdownOptions} />
      </div>
    </div>
  )
}

export default OperatingSystemSelector
