import React from "react"
import SelectorHeader from "../Common/SelectorHeader"
const tokenlist = [
  { name: "Mac OS" },
  { name: "Mac OS 2" },
  { name: "Mac OS version 3" },
  { name: "Mac OS 3" },
]

const Architeccture = [
  { name: "aarch64" },
  { name: "aarch2" },
  { name: "aarch53" },
  { name: "aarch6478" },
]
const Package = [
  { name: "JDK" },
  { name: "JDK 2" },
  { name: "JDK version3" },
  { name: "JDK 4" },
]
const Version = [
  { name: "21 - LTS" },
  {
    name: "21 - LTS 3",
  },
  { name: "21 - LTS 4" },
  { name: "21 - LTS 5" },
]

const titles = ["Operating System", "Architecture", "Package Type", "Version"]
const ReleasingSelector = ({ className }) => {
  return (
    <div>
      {" "}
      <div className={`my-8 md:my-[64px] ${className}`}>
        <SelectorHeader
          data={[tokenlist, Architeccture, Package, Version]}
          title={titles}
        />
      </div>
    </div>
  )
}

export default ReleasingSelector
