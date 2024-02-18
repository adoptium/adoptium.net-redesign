import React, { useState } from "react"
import CommonSelector from "../CommonSelector"

import { packageTypes } from "../../../util/defaults"
import { capitalize } from "../../../util/capitalize";

const OSSelector = ({
  operatingSystem,
  svgComponent,
  buttons,
  activeIndex,
  onActiveChange,
  onPackageTypeChange,
}) => {
  return (
    <div>
      <div className="p-6 bg-[#2B1A4F] flex flex-col rounded-[24px] gap-6 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-start items-center">
            {svgComponent}
            <h5 className="text-2xl font-semibold leading-[32px]">
              {capitalize(operatingSystem)}
            </h5>
          </div>

          <div className="flex gap-4">
            {buttons.map((button, index) => (
              <button key={index} onClick={() => onActiveChange(button.label)}>
                <span
                  className={`py-3 w-full text-base font-normal leading-6 
                     outline-none cursor-pointer transition-all duration-200 ease-in-out ${activeIndex === button.label ? "border-primary  border-b-[2px] text-white" : "text-[#8a809e] border-transparent  border-b"}`}
                >
                  {button.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <CommonSelector list={packageTypes} onSelect={onPackageTypeChange} />
      </div>
    </div>
  );
};

export default OSSelector
