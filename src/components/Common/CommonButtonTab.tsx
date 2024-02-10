import React from "react"

const CommonButtonTab = ({ children, className }) => {
  return (
    <div>
      <button
        className={` py-2  w-full text-base font-normal leading-6 outline-none cursor-pointer transition-all duration-200 ease-in-out ${className} `}
      >
        {children}
      </button>
    </div>
  )
}

export default CommonButtonTab
