import React, { useCallback } from "react"

import { setURLParam } from "../../../util/setURLParam"

const VersionSelector = ({
  activeVersionTab,
  setActiveVersionTab,
  versions,
  updateVersion,
  defaultVersion,
  updateOS,
  updateArch,
}) => {
  const setActiveTabVersion = useCallback(newActiveVersionTab => {
    // Reset OS and arch to "any" whenever a version tab is clicked
    if (updateOS) {
      setURLParam("os", "any")
      updateOS("any")
    }
    
    if (updateArch) {
      setURLParam("arch", "any")
      updateArch("any")
    }
    
    // Handle version update
    if (newActiveVersionTab === 1) {
      setURLParam("version", defaultVersion)
      updateVersion(defaultVersion)
    } else {
      setURLParam("version", newActiveVersionTab)
      updateVersion(newActiveVersionTab)
    }
    
    setActiveVersionTab(newActiveVersionTab)
  }, [updateOS, updateArch])

  return (
    <div className="w-full max-w-[1264px] mx-auto ">
      <div className="overflow-auto relative min-w-full w-full ">
        <span className="h-[1px] w-full bg-[#3E3355] inline-block absolute bottom-0 z-[-1]"></span>
        <div className="flex space-x-10 whitespace-nowrap   lg:justify-center py-3">
          <button onClick={() => setActiveTabVersion(1)}>
            <span
              className={` py-3  w-full text-base font-normal leading-6 
                outline-none cursor-pointer transition-all duration-200 ease-in-out ${activeVersionTab === 1 ? "border-primary  border-b-[2px] text-white" : "text-[#8a809e] border-transparent  border-b"}`}
            >
              All Versions
            </span>
          </button>
          {versions.map((version, index) => (
            <button
              key={index}
              onClick={() => setActiveTabVersion(version.node.version)}
            >
              <span
                className={` py-3  w-full text-base font-normal leading-6
                    outline-none cursor-pointer transition-all duration-200 ease-in-out ${activeVersionTab === version.node.version ? "border-primary  border-b-[2px] text-white" : "text-[#8a809e] border-transparent  border-b"}`}
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
