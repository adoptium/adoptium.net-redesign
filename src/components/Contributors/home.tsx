import React from "react"

const ContributorsHome = () => {
  return (
    <>
      <div className="contributors ">
        <div className="mx-auto max-w-[848px] w-full flex flex-col justify-center items-center text-justify sm:text-center lg:py-[280px] py-[296px]">
          <h2 className="lg:text-[104px] text-[64px] font-semibold leading-[72px] lg:leading-[120px] text-white w-full text-center !z-50 hidden md:block">
            Thank you to our <span className="text-primary">300+</span>
            contributors
          </h2>
          <h2 className="text-[64px] font-semibold leading-[72px] text-white w-full text-center !z-50 block md:hidden px-4">
            Thank you <br /> to our <span className="text-primary">300+</span>
            <br /> contributors
          </h2>
        </div>
      </div>
    </>
  )
}

export default ContributorsHome
