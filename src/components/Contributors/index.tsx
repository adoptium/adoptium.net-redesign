import React from "react"

import RandomContributor from "../RandomContributor"

const Contributors = () => {
  return (
    <div className="bg-blue border-[#3E3355] border-b py-10 px-6">
      <div className="flex flex-col lg:flex-row max-w-[1048px] mx-auto justify-center lg:justify-between gap-5 items-center ">
        <p className="text-3xl md:text-4xl leading-[38px] md:leading-[48px] text-white my-0 text-center">
          Thank you to our <span className="text-pink pr-1">300+</span>
          contributors
        </p>
        <RandomContributor style={null} />
      </div>
    </div>
  )
}

export default Contributors
