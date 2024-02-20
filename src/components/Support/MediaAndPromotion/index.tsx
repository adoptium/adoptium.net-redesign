import React from "react"
import CommonHeading from "../../Common/CommonHeading"
import CommonCard from "../../Common/CommonCard"

const MediaAndPromotion = () => {
  const media = [
    {
      title: "Media & Promotion",
      description:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime",
      button: "Learn More",
    },
  ]
  return (
    <section className="bg-[#0E002A] pt-16">
      <div className="pt-16   pb-8 md:pb-16 max-w-[1048px] flex-col lg:flex-row mx-auto w-full px-8 lg:px-2 xl:px-0 flex justify-center gap-16 items-center">
        <div className=" w-full lg:w-[55%] text-center lg:text-left">
          <CommonHeading
            title={"Help promote Temurin"}
            description={
              "Svennekoloni paheten fronta didoling. Grönt körfält mitt, och astrongar fastän animoji. Doxa exosm morotsmobb diska. Såsuss bröllopsklänning i preppare. Fulparkerare nirad mms biorat.\n"
            }
          />
          <CommonHeading
            description={
              "Eurosinde processturism vasiminade. Äga frågan bekymringssamtal, alltså prens. Drevkultur tredönde bilmålvakt i ypren. Exoska semiras digt, eller makror. Cosplay faras attefallshus ber."
            }
          />
        </div>
        <div>
          {media.map((item, index) => (
            <div key={index} className="">
              <CommonCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaAndPromotion
