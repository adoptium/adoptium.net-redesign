import React from "react"
import eventimg from "../../img/event-img.png"

const EventCard = () => {
  return (
    <>
      <div className=" flex flex-col max-w-[385px] newscard-2   bg-[#200D46] ">
        <img className="mb-0" src={eventimg} alt="" />
        <div className="p-8    ">
          <h3 className="text-[24px] font-semibold leading-[133.333%]">
            Explore the Eclipse Temurin Community and Join the Elite List of
            Adopters
          </h3>
          <div className="flex justify-between pt-4">
            <h3 className="flex flex-col gap-1 tab-button-text text-white">
              <span>5 Jun, 2023</span>
              <span>London</span>
            </h3>
            <h3 className="tab-button-text text-white">13:00 - 15:00</h3>
          </div>
          <button className="bg-transparent mt-6 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-supportus ">
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}

export default EventCard
