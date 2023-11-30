import React from "react"

import RandomContributor from "../RandomContributor"

const Contributors = () => {
  return (
    <div className="bg-[#0E002A] border-[#3E3355] border-b py-10 px-6">
      <div className="flex flex-col lg:flex-row max-w-[1048px] mx-auto  justify-center lg:justify-between gap-5  items-center ">
        <h3 className=" text-[30px] md:text-[40px] font-hanken leading-[38px] md:leading-[48px] text-white my-0 text-center">
          Thank you to our <span className="text-[#FF1464] pr-1">300+</span>
          contributors
        </h3>
        <RandomContributor style={null} />
      </div>
    </div>
  )
}

export default Contributors
