import React from "react"
import EventCard from "./EventCard"
import CommonHeading from "../Common/CommonHeading"

const EventWapper = () => {
  return (
    <div className="max-w-[1264px] mx-auto px-6 py-12 md:py-16">
      <CommonHeading
        className="text-center max-w-[680px] mx-auto"
        title={"Events"}
        description={
          "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        }
      />
      <div className="flex justify-center gap-6 items-center flex-wrap py-16">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex items-center flex-wrap justify-center gap-8">
        <h3 className="text-[20px] leading-[140%] font-semibold text-white">
          Eclipse Temurin offers high-performance
        </h3>
        <button className="bg-transparent border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-border ">
          View All Events
        </button>
      </div>
    </div>
  )
}

export default EventWapper
