import React from "react"

export const RedIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#FF1464" />
      <rect
        x="1.5"
        y="1.5"
        width="11"
        height="11"
        rx="3.5"
        stroke="#FF1464"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
    </svg>
  )
}
export const AnnouncementBarIcon = () => (
  <svg
    className="group-hover:translate-x-1 transition-all duration-150 ease-in-out"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16406 10H15.8307"
      stroke="#FF1464"
      stroke-Width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 4.16666L15.8333 9.99999L10 15.8333"
      stroke="#FF1464"
      stroke-Width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
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

export default Banner
