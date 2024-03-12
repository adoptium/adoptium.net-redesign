import React from "react"
import CommonSelector from "../Common/CommonSelector"
import EventCard from "../Our-Community/EventCard"
import {
  PaginationLeftArrowIcon,
  PaginationRightArrowIcon,
} from "../Common/Icon"

const BlogCardList = () => {
  const Articles = [
    { name: "All Articles" },
    { name: "Install Temurin" },
    { name: "aarch53" },
    { name: "aarch6478" },
  ]
  const AtoZ = [
    { name: "A-Z" },
    { name: "Article1" },
    { name: "Article2" },
    { name: "Article3" },
  ]
  return (
    <div className="max-w-[1264px] mx-auto px-6  py-8 md:pt-12">
      <div className="flex justify-center items-center gap-6 md:gap-14">
        <div className="max-w-[158px] w-full">
          {" "}
          <CommonSelector list={Articles} />
        </div>
        <div className="flex  items-center gap-5">
          <p className="tab-button-text mb-0 whitespace-nowrap">Sort by:</p>
          <div className="w-full max-w-[105px]">
            <CommonSelector list={AtoZ} />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 items-center flex-wrap pt-8 md:pt-12">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex justify-center gap-6 items-center flex-wrap py-8 md:py-12">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex justify-center items-center gap-8 md:gap-14">
        <div className="flex items-center gap-3 ">
          <span className="cursor-pointer">
            <PaginationLeftArrowIcon />
          </span>
          <p className="tab-button-text mb-0 hidden md:block">Previous</p>
        </div>
        <div className=" flex items-center gap-5">
          <div className="flex items-center justify-between gap-6 border-[#3E3355] border rounded-[80px] px-6 py-3 ">
            <p className="tab-button-text mb-0">1</p>
            <p className="tab-button-text mb-0">2</p>
            <p className="tab-button-text mb-0">3</p>
          </div>
          <div className="flex items-end">
            <p className="tab-button-text mb-0">...</p>
          </div>
          <div className="flex items-center justify-center border-[#3E3355] border rounded-full h-12 w-12 ">
            <p className="tab-button-text mb-0">12</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <p className="tab-button-text mb-0 hidden md:block">Next</p>
          <span className="cursor-pointer">
            <PaginationRightArrowIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogCardList
