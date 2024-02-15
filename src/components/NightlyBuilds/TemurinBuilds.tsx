import React from "react"
import SelectorHeader from "../Common/SelectorHeader"
import { DownloadIcon } from "../Common/AppIcon"

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
      <h2 className="text-center text-4xl mb-10 font-semibold md:text-5xl leading-[116%] ">
        Temurin Builds on 01/04/23
      </h2>
      <div className="flex justify-center items-center">
        <button className="bg-transparent  flex items-center justify-center  border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[191px] h-[48px] rounded-2xl gradient-border">
          Source Code{" "}
          <span className="ml-2">
            <DownloadIcon />
          </span>
        </button>
      </div>
      <div className="w-full px-6 xl:px-0 flex  flex-col items-start justify-start sm:items-center sm:justify-center my-8 md:my-16  ">
        <SelectorHeader
          data={[Java, Operating, Release, Architecture, Bitness, Package]}
          title={titles}
        />
      </div>
    </>
  )
}

export default TemurinBuilds
