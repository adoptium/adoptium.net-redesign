import React from "react"

const CommonButton = ({ children, className, icon }) => {
  return (
    <button
      className={`bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base  leading-6 font-normal w-[146px] h-[48px] rounded-[80px] gradient-border ${className}`}
    >
      {children}
      {icon}
    </button>
  )
}

export default CommonButton
