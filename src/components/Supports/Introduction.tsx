import React from "react"
import "../../styles/style.scss"
import CommonHeading from "../Common/CommonHeading"

const Introduction = () => {
  const carddata = [
    {
      id: 1,
      title: "Support from our community",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime.",
      button: "Our Community",
      check: "Raise an Issue",
    },
    {
      id: 2,
      title: "Support for our commercial providers",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime.",
      button: "Business Benefits",
      check: undefined,
    },
  ]
  return (
    <section className="pt-16 pb-14  md:pt-32 md:pb-24 mx-auto max-w-[832px] w-full lg:px-2   xl:px-0 px-6">
      <CommonHeading
        className="text-center"
        title={"Introduction"}
        description={
          "If you value Eclipse technologies, please consider becoming a sponsor through the Eclipse Foundation. Contributions from users like you help fund the operations of the Adoptium working group. All money contributed to the Eclipse Foundation will be used to support the Eclipse community through the Adoptium working group."
        }
      />
      <div className="mt-16  gap-4 md:gap-8  flex flex-wrap justify-center items-center">
        {carddata.map((data, index) => (
          <div
            key={index}
            className="p-10 flex flex-col max-w-[400px] newscard-2 h-[440px] md:h-[480px] bg-[#200E46]"
          >
            <div className="grow">
              <h3 className="text-white text-[30px] font-semibold  leading-[120%] md:text-[40px]">
                {data.title}
              </h3>
              <p className="mt-6 text-xl text-lightgrey font-normal">
                {data.description}
              </p>
            </div>
            <div className="flex flex-wrap items-end justify-between mt-4 md:mt-0 gap-5">
              <button className="bg-transparent   border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[180px] h-[48px] rounded-[80px] gradient-supportus ">
                {data.button}
              </button>
              <h3 className="text-base font-semibold leading-[150%] border-b-2 border-white pb-3">
                {data.check}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Introduction
