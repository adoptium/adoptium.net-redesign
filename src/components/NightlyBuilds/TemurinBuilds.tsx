import React from "react"
import SelectorHeader from "../Common/SelectorHeader"
import { DownloadIcon } from "../Common/AppIcon"
import Heading from "../Common/Heading"

const TemurinBuilds = () => {
  const titles = [
    "Java Version",
    "Release Version",
    "Operating system",
    "Architecture",
    "Bitness",
    "Package Type",
  ]
  const Java = [
    { name: "Java 20" },
    { name: "Mac OS 2" },
    { name: "Mac OS 3" },
    { name: " Mac os Version" },
  ]
  const Operating = [
    { name: "Any" },
    { name: "aarch64" },
    {
      name: "aarch 2",
    },
    { name: "aarch 3" },
  ]
  const Release = [
    {
      name: "Any",
    },
    { name: "Operating" },
    { name: "Operating System" },
    { name: "Operating System Window" },
  ]
  const Architecture = [
    { name: "Any" },
    { name: "aarch64" },
    {
      name: "aarch 2",
    },
    { name: "aarch 3" },
  ]
  const Bitness = [
    {
      name: "Any",
    },
    { name: "Operating" },
    { name: "Operating System" },
    { name: "Operating System Window" },
  ]
  const Package = [
    { name: "Any" },
    { name: "aarch64" },
    {
      name: "aarch 2",
    },
    { name: "aarch 3" },
  ]
  return (
    <>
      <div className="w-full px-6 xl:px-0 flex  flex-col items-start justify-start sm:items-center sm:justify-center mb-8 md:mb-16">
        <Heading title={"Liberica JDK 20.0.2+10"} />
        <SelectorHeader
          data={[Java, Operating, Release, Architecture, Bitness, Package]}
          title={titles}
        />
      </div>
      <div className="w-full gap-4 px-6 mb-8 xl:px-0 justify-between max-w-[1264px] mx-auto items-center hidden sm:flex ">
        <div className="h-[1px] bg-[#3E3355] w-full "></div>
        <h5 className="whitespace-nowrap text-base font-normal  text-[#C4BFCE]">
          64 bit
        </h5>
        <div className="h-[1px] bg-[#3E3355] w-full "></div>
      </div>
    </>
  )
}

export default TemurinBuilds
