import React from "react"
import { CopyIcon, DownloadIcon } from "./AppIcon"

const CommonDownloader = ({ obj }) => {
  return (
    <div className="text-white  w-[100%] py-6 border-b-[1px]  border-[#3E3355]">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer group">
            <DownloadIcon />
          </span>
          <h5 className="text-base font-normal">{obj.label}</h5>
        </div>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer group">
            <CopyIcon />
          </span>
          <h5 className="text-base font-normal">SHA1</h5>
        </div>
      </div>
    </div>
  )
}

export default CommonDownloader
