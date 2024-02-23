import React from "react"
import CommonHeading from "../Common/CommonHeading"

const MediaAndPromotion = () => {
  return (
    <section className=" bg-[#0E002A] pt-0 md:pt-16 ">
      <div className="pt-16   pb-8 md:pb-16 max-w-[1048px] flex-col lg:flex-row mx-auto w-full px-6 lg:px-2 xl:px-0 flex justify-center gap-16 items-center">
        <div className=" w-full lg:w-[55%] text-center lg:text-left">
          <CommonHeading
            title={"Help promote Temurin"}
            description={
              "Svennekoloni paheten fronta didoling. Grönt körfält mitt, och astrongar fastän animoji. Doxa exosm morotsmobb diska. Såsuss bröllopsklänning i preppare. Fulparkerare nirad mms biorat. "
            }
            className={undefined}
          />
          <CommonHeading
            description={
              "Eurosinde processturism vasiminade. Äga frågan bekymringssamtal, alltså prens. Drevkultur tredönde bilmålvakt i ypren. Exoska semiras digt, eller makror. Cosplay faras attefallshus ber. "
            }
            title={undefined}
            className={undefined}
          />
        </div>
        <div>
          <div className="p-10 flex flex-col max-w-[400px] newscard-2 h-[440px] md:h-[480px] bg-[#200E46]">
            <div className="grow">
              <h3 className="text-white text-[30px] font-semibold  whitespace-nowrap  md:whitespace-normal leading-[120%] md:text-[40px]">
                Media & Promotion
              </h3>
              <p className="mt-6 text-xl text-lightgrey font-normal">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime
              </p>
            </div>
            <button className="bg-transparent   border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[180px] h-[48px] rounded-[80px] gradient-media-btn ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaAndPromotion
