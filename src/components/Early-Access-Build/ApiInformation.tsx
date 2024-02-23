import { Link } from "gatsby"
import React from "react"

const ApiInformation = () => {
  return (
    <>
      <section className="pt-14 pb-16 md:py-16 max-w-[1048px] w-full mx-auto flex flex-col  lg:flex-row justify-center items-center lg:justify-between xl:px-0 px-6 ">
        <div className="max-w-[320px] lg:max-w-[400px] w-full mb-14 lg:mb-0 ">
          <img
            src="/images/icons/experience.png"
            className="mb-0"
            alt="scroll-divider"
          />
        </div>

        <div className="lg:max-w-[560px] w-full  ">
          <h2 className="md:text-5xl text-[40px] font-semibold leading-[122.222%] md:leading-[116.667%]">
            A short title for API information
          </h2>
          <p className="md:mt-6 mt-10 mb-5s text-[#C4BFCE] text-xl md:text-base leading-[150%] font-normal">
            Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum.
            Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus
            diam turpis. Massa posuere ornare dignissim orci consequat.
          </p>

          <div>
            <Link to={""}>
              <button className="bg-transparent mt-6 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-border ">
                Who we are
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApiInformation
