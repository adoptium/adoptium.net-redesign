import React from "react"
import logoimg from "../../img/About-Eclipse-img.png"
import CommonHeading from "../Common/CommonHeading"

const AboutEclipseCard = () => {
  return (
    <div className="community flex justify-center items-center px-4 pt-10 pb-24 md:py-24">
      <div className="newscard-2 gap-4 md:gap-10 flex flex-col md:flex-row justify-between md:items-center max-w-[1000px] mx-auto p-[32px] md:p-[64px]">
        <div className="max-w-[110px] ">
          <img className="w-full" src={logoimg} alt="" />
        </div>
        <div className="flex flex-col md:gap-3">
          <CommonHeading
            title="About Eclipse AQAvit"
            description="The AQAvit open source test suite (Adoptium Quality Assurance) can be found here. There is also a blog post and brief presentation that explains what testing is run and how it fits into the overall delivery pipeline."
            className={"!mt-0"}
          />

          <button className=" mt-6  border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[151px] h-[48px] rounded-2xl gradient-border">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutEclipseCard
