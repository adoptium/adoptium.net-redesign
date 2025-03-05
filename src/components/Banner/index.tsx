import React from "react"
import { RedIcon } from "../Common/Icon"

const Banner = () => {
  // return null

  // The following is an example that can be used for future banner alert
  // Comment Out The Above Line ( return null ; ) and uncomment the below

  //  return (
  //    <div className="alert text-white alert-dismissible fade show mb-0 text-center" style={{ backgroundColor: '#ff1464' }} role="alert">
  //    <strong className='p-1'>13th October 2023:</strong>
  //        We are creating the October 2023 PSU binaries for Eclipse Temurin 8u392, 11.0.21 and 17.0.9 and 21.0.1<br/>
  //        You can track progress <a className='alert-link p-1 text-white' href="https://github.com/adoptium/temurin/issues/6">by platform</a>.
  //     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //    </div>
  //  );

  return (
    <div className="bg-[#0E002A] py-4 w-full ">
      <div className="flex justify-center items-center gap-5">
        <div className="flex items-center gap-3">
          <RedIcon />
          <h2 className="text-[16px] font-bold text-primary leading-[150%]">
            <strong className='p-1'>13th October 2023:</strong>
            We are creating the October 2023 PSU binaries for Eclipse Temurin 8u392, 11.0.21 and 17.0.9 and 21.0.1<br/>
            You can track progress <a className='alert-link p-1 text-white' href="https://github.com/adoptium/temurin/issues/6">by platform</a>.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </h2>
        </div>
      </div>
    </div>
  )  
}

export default Banner
