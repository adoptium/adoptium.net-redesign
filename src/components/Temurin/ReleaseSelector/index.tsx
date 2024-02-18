import React from "react"
import SelectorHeader from "../../Common/SelectorHeader"

import { oses, arches, packageTypes } from "../../../util/defaults"

const titles = ["Operating System", "Architecture", "Package Type", "Version"]
const ReleaseSelector = ({versions}) => {
  const versionsList = versions.edges.map(version => {
    return {
      name: version.node.label,
      value: version.node.version,
    }
  })
  return (
    <div>
      {" "}
      <div className="my-[50px]">
        <SelectorHeader
          data={[oses, arches, packageTypes, versionsList]}
          title={titles}
        />
      </div>
    </div>
  )
}

export default ReleaseSelector
