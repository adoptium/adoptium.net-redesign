import { Link } from "gatsby"
import React from "react"

const HowToSupport = () => {
  return (
    <div className=" pt-14 pb-16 md:pt-32 md:pb-20 max-w-[1048px] gap-12 w-full mx-auto flex flex-col  lg:flex-row justify-center items-center lg:justify-between xl:px-0 px-6 ">
      <div className="lg:max-w-[560px] w-full  ">
        <h2 className="md:text-5xl text-[36px] font-semibold leading-[122.222%] md:leading-[116.667%]">
          How to support us
        </h2>
        <p className="md:mt-6 mt-10 mb-5 text-lightgrey tab-button-text">
          Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum.
          Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus
          diam turpis. Massa posuere ornare dignissim orci consequat.
        </p>

        <div className="  mt-8">
          <Link to={""}>
            <button className="bg-transparent  border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-border ">
              Support Us
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-[320px] lg:max-w-[400px] w-full  ">
        <img
          src="/images/icons/experience.png"
          className="mb-0"
          alt="scroll-divider"
        />
      </div>
    </div>
  )
}

export default HowToSupport
