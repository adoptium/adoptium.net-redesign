import React from "react"
import "../../styles/style.scss"
import CommonHeading from "../Common/CommonHeading"
import { RedIcon } from "../Common/Icon"
import ReleaseRoadMapMobile from "./ReleaseRoadMapMobile"

const RoadMapCard = ({ title, itemCount, number }) => (
  <div className="p-7 flex flex-col  max-w-[384px] w-full newscard-2 h-[416px]  bg-[#1A0D35]">
    <div className="flex items-center gap-5">
      <h3 className="text-[32px] font-semibold text-white leading-[125%]">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <span>
          <RedIcon />
        </span>
        <p className="text-[16px] font-bold leading-[150%] text-primary mb-0">
          {number}
        </p>
      </div>
    </div>
    <div className="mt-[24px] overflow-auto scroll-container  flex flex-col ">
      <div className="flex flex-col  gap-3 justify-center  items-center  ">
        {[...Array(itemCount)].map((_, index) => (
          <div
            key={index}
            className={`flex rounded-2xl p-4 bg-[#26193F]   ${itemCount === 6 ? "mr-4" : "mr-0"} `}
          >
            <p className="text-[20px] text-white leading-[140%] mb-0">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ReleaseRoadMap = () => {
  const roadmapcarddata = [
    { id: 1, title: "Now", itemCount: 6, number: "6" },
    { id: 2, title: "Next", itemCount: 2, number: "2" },
    { id: 3, title: "Later", itemCount: 4, number: "2" },
    // Add more roadmap card data as needed
  ]

  return (
    <div className="bg-[#0E002A]">
      <div className="max-w-[1264px] mx-auto px-6 py-20 md:py-28">
        <CommonHeading
          className="text-center max-w-[740px] mx-auto"
          title={"Release Roadmap"}
          description={
            "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          }
        />
        <div className=" hidden md:flex items-center justify-center xl:justify-between gap-7 flex-wrap mt-16">
          {roadmapcarddata.map(card => (
            <RoadMapCard
              key={card.id}
              title={card.title}
              number={card.number}
              itemCount={card.itemCount}
            />
          ))}
        </div>
        <ReleaseRoadMapMobile />
      </div>
    </div>
  )
}

export default ReleaseRoadMap
