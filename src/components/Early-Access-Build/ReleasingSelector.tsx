import React from "react"
import SelectorHeader from "../Common/SelectorHeader"

const ReleasingSelector = () => {
  return (
    <div>
      {" "}
      <div className="my-[50px]">
        <SelectorHeader
          data={[
            {
              subtitle: "Operating System",
              title: "Mac OS ",
              options: ["Mac OS", "Mac OS 2", "Mac OS 3"],
            },
            {
              subtitle: "Architecture",
              title: "aarch64",
              options: ["aarch64", "aarch 2", "aarch 3"],
            },
            {
              title: "JDK",
              subtitle: "Package Type",
              options: ["JDK12", "JDK 2", "JDK 3"],
            },
            {
              title: "21 - LTS",
              subtitle: "Version",
              options: ["LTS23", "LTS 2", "LTS 3"],
            },
          ]}
        />
      </div>
    </div>
  )
}

export default ReleasingSelector
