import React from "react"
import SelectorHeader from "../../Common/SelectorHeader"

import { oses, arches } from "../../../util/defaults"

const titles = ["Operating System", "Architecture", "Version"]
const ReleaseSelector = ({ versions, updateVersion, updateOS, updateArch }) => {
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
          data={[oses, arches, versionsList]}
          selectorUpdater={[updateOS, updateArch, updateVersion]}
          title={titles}
        />
      </div>
    </div>
  )
}

export default ReleaseSelector
