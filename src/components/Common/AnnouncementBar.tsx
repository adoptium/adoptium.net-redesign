import React from "react"
import { RedIcon } from "./Icon"
import { AnnouncementBarIcon } from "./AppIcon"

const AnnouncementBar = () => {
  return (
    <div className="bg-[#0E002A] py-4 w-full ">
      <div className="flex justify-center items-center gap-5">
        <div className="flex items-center gap-3">
          <RedIcon />
          <h2 className="text-[16px] font-bold text-primary leading-[150%]">
            An announcement will look like this
          </h2>
        </div>
        <span className="cursor-pointer group">
          <AnnouncementBarIcon />
        </span>
      </div>
    </div>
  )
}

export default AnnouncementBar
