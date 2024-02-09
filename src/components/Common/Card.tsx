import React from "react"

const Card = ({ data }) => {
  return (
    <div className="p-10 flex flex-col max-w-[400px] w-full rounded-[24px] border-[1px] border-white h-[440px] md:h-[480px] bg-[#200E46]">
      <div className="grow">
        <h3 className="text-white text-[30px] font-semibold  md:text-[40px]">
          {data.title}
        </h3>
        <p className="mt-6 text-lg font-normal">{data.description}</p>
      </div>
      <button className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[146px] h-[48px] rounded-[80px] gradient-border lg:block hidden">
        {data.button}
      </button>
    </div>
  )
}

export default Card
