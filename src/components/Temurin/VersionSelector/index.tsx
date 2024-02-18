import React, { useCallback } from "react"

import { setURLParam } from "../../../util/setURLParam"

const VersionSelector = ({ active, setActive, versions }) => {

  const setVersion = useCallback(version => {
    setURLParam("version", version)
    setActive(version)
  }, [])

  return (
    <div className="w-full max-w-[1264px] mx-auto ">
      <div className="overflow-auto relative min-w-full w-full ">
        <span className="h-[1px] w-full bg-[#3E3355] inline-block absolute bottom-0 z-[-1]"></span>
        <div className="flex space-x-10 whitespace-nowrap   lg:justify-center py-3">
          <button onClick={() => setActive(1)}>
            <span
              className={` py-3  w-full text-base font-normal leading-6 
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === 1 ? "border-primary  border-b-[2px] text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              All Versions
            </span>
          </button>
          {versions.map((version, index) => (
            <button key={index} onClick={() => setVersion(version.node.version)}>
              <span
                className={` py-3  w-full text-base font-normal leading-6
                    outline-none cursor-pointer transition-all duration-200 ease-in-out ${active === version.node.version ? "border-primary  border-b-[2px] text-white" : "text-[#8a809e] border-transparent  border-b"}`}
              >
                JDK {version.node.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VersionSelector
