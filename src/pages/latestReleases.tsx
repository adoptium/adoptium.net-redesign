import React from "react"

import { WindowIcon } from "../components/Common/AppIcon"
import OperatingSystemSelector from "../components/Common/OperatingSystemSelector"
import CommonDownloader from "../components/Common/CommonDownloader"

const LatestReleases = () => {
  const arr = [
    {
      label: "MSI, 185.41Mb",
      sha: "SHA1",
      file: "",
    },

    {
      label: "ZIP, 188.84Mb",
      sha: "SHA1",
      file: "",
    },

    {
      label: "ZIP, 188.84Mb",
      sha: "SHA1",
      file: "",
    },
  ]

  return (
    <div className="">
      <div className="max-w-[1264px] space-y-6  w-full  mt-5  mx-auto py-8 rounded-[24px] bg-[#200E46] border-white p-8">
        <div className="flex justify-between items-center">
          <OperatingSystemSelector
            operatingSystem={"Window"}
            svgComponent={<WindowIcon />}
          />
          <div className="flex flex-col">
            {arr.map(obj => (
              <CommonDownloader obj={obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestReleases
