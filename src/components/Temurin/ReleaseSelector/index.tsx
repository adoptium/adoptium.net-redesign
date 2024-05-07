import React from "react"
import SelectorHeader from "../../Common/SelectorHeader"

import { fetchOses, fetchArches} from '../../../hooks/fetchConstants'
import { packageTypes } from "../../../util/defaults"

interface ReleaseSelectorProps {
  marketplace?: boolean
  versions: {
    edges: {
      node: {
        version: string
        label: string
      }
    }[]
  }
  defaultVersion?: string
  defaultOS?: string
  defaultArch?: string
  defaultPackageType?: string
  updateVersion: (version: string) => void
  updateOS: (os: string) => void
  updateArch: (arch: string) => void
  updatePackageType?: (pkgType: string) => void
}

const ReleaseSelector: React.FC<ReleaseSelectorProps> = ({
  marketplace,
  versions,
  defaultVersion,
  defaultOS,
  defaultArch,
  defaultPackageType,
  updateVersion,
  updateOS,
  updateArch,
  updatePackageType,
}) => {
  const versionsList = versions.edges.map(version => {
    return {
      name: version.node.label,
      value: version.node.version,
    }
  })

  const data = [fetchOses(true), fetchArches(true), versionsList]
  if (marketplace) {
    data.push(packageTypes)
  }

  const selectorUpdaters = [updateOS, updateArch, updateVersion]
  if (marketplace && updatePackageType) {
    selectorUpdaters.push(updatePackageType)
  }

  const titles = ["Operating System", "Architecture", "Version"]
  if (marketplace) {
    titles.push("Package Type")
  }

  const defaultValues: string[] = []
  if(defaultOS) defaultValues.push(defaultOS)
  if(defaultArch) defaultValues.push(defaultArch)
  if(defaultVersion) defaultValues.push(defaultVersion)
  if (marketplace && defaultPackageType) {
    defaultValues.push(defaultPackageType)
  }

  return (
    <div>
      {" "}
      <div className="my-[50px]">
        <SelectorHeader
          data={data}
          selectorUpdater={selectorUpdaters}
          title={titles}
          defaultValues={defaultValues}
        />
      </div>
    </div>
  )
}

export default ReleaseSelector
