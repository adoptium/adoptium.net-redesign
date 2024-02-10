import React from "react"
import "../../styles/style.scss"
const CommonCard = ({ data }) => {
  return (
    <div className="p-10 flex flex-col max-w-[400px] newscard-2 h-[440px] md:h-[480px] bg-[#200E46]">
      <div className="grow">
        <h3 className="text-white text-[30px] font-semibold  whitespace-nowrap  md:whitespace-normal leading-[120%] md:text-[40px]">
          {data.title}
        </h3>
        <p className="mt-6 text-xl text-[#C4BFCE] font-normal">
          {data.description}
        </p>
      </div>
      <button className="bg-transparent   border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[146px] h-[48px] rounded-[80px] gradient-border ">
        {data.button}
      </button>
    </div>
  )
}

export default CommonCard
