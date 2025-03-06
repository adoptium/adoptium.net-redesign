import React from "react"
import { RedIcon } from "../Common/Icon"

const Banner = () => {
  // return null

  // The following is an example that can be used for future banner alert
  // Comment Out The Above Line ( return null ; ) and uncomment the below

  return (
    <div className="bg-[#0E002A] py-4 w-full">
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-3">
          <RedIcon />
          <h2 className="text-[16px] font-bold text-white leading-[150%]">
            13th October 2023: We are creating the October 2023 PSU binaries for Eclipse Temurin 8u392, 11.0.21 and 17.0.9 and 21.0.1<br/>
            You can track progress <a className='text-primary' href="https://github.com/adoptium/temurin/issues/6">by platform</a>.
          </h2>
        </div>
      </div>
    </div>
  )  
}

export default Banner
