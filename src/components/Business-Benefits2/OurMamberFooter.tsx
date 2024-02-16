import React from "react"

const OurMamberFooter = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap items-center gap-5 md:gap-14 mt-10">
        <p className="text-[20px] font-hanken leading-[140%] text-white my-0 text-center">
          Are you interested in becoming a member?
        </p>
        <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-[150%] font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
          Become a Member
        </button>
      </div>
    </>
  )
}

export default OurMamberFooter
