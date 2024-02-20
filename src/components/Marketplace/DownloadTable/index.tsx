import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@gatsbyjs/reach-router"
import queryString from "query-string"

import ReleaseSelector from "../../Temurin/ReleaseSelector"
import VendorSelector from "../VendorSelector"
import AllReleaseCard from "../AllReleaseCard"

import { setURLParam } from "../../../util/setURLParam"
import { getAllPkgsForVersion, MarketplaceRelease } from "../../../hooks"
import {
  oses,
  arches,
  packageTypes,
  defaultArchitecture,
  defaultPackageType,
} from "../../../util/defaults"

const DownloadTable = () => {
  const data = useStaticQuery(graphql`
    query MarketplaceVersionsQuery {
      allVersions(sort: { version: DESC }, filter: { lts: { eq: true } }) {
        edges {
          node {
            version
            label
            lts
          }
        }
      }
      mostRecentLts {
        version
      }
    }
  `)

  const queryStringParams = queryString.parse(useLocation().search)

  // init the default selected Operation System, if any from the param 'os'
  let defaultSelectedOS = "any"
  const osParam = queryStringParams.os
  if (osParam) {
    let sop = osParam.toString().toLowerCase()
    if (oses.findIndex(os => os.value.toLowerCase() === sop) >= 0)
      defaultSelectedOS = sop
  }

  // init the default selected Architecture, if any from the param 'arch'
  let defaultSelectedArch = "any"
  const archParam = queryStringParams.arch
  if (archParam) {
    let sap = archParam.toString().toLowerCase()
    if (arches.findIndex(a => a.value.toLowerCase() === sap) >= 0)
      defaultSelectedArch = sap
  }

  // init the default selected Package Type, if any from the param 'package'
  let defaultSelectedPackageType = "any"
  const packageParam = queryStringParams.package
  if (packageParam) {
    let spp = packageParam.toString().toLowerCase()
    if (packageTypes.findIndex(p => p.value.toLowerCase() === spp) >= 0)
      defaultSelectedPackageType = spp
  }

  // init the default selected Version, if any from the param 'version' or from 'variant'
  let defaultSelectedVersion = data.mostRecentLts.version
  const versionParam = queryStringParams.version
  if (versionParam) {
    let svp = versionParam.toString()
    let nvp = Number(svp)

    if (svp.toLowerCase() === "latest") {
      // get the latest version of the list
      defaultSelectedVersion = data.allVersions.sort(
        (a, b) => b.node.version - a.node.version,
      )[0].node.version
    } else if (
      data.allVersions.edges.findIndex(
        version => version.node.version === nvp,
      ) >= 0
    ) {
      defaultSelectedVersion = nvp
    }
  }

  // init the default selected Version, if any from the param 'variant'
  const variantParam = queryStringParams.variant
  if (variantParam) {
    // convert openjdk11 to 11
    const parsedVersion = variantParam.toString().replace(/\D/g, "")
    let nvp = Number(parsedVersion)

    if (
      data.allVersions.findIndex(version => version.node.version === nvp) >= 0
    ) {
      defaultSelectedVersion = nvp
    }
  }

  const [os, updateOS] = useState(defaultSelectedOS)
  const [arch, updateArch] = useState(defaultSelectedArch)
  const [version, udateVersion] = useState(defaultSelectedVersion)

  const [selectedVendorIdentifiers, updateSelectedVendorIdentifiers] = useState<
    string[]
  >([])

  const versionUpdater = version => {
    setURLParam("version", version)
    udateVersion(version)
  }

  const archUpdater = arch => {
    setURLParam("arch", arch)
    updateArch(arch)
  }

  const osUpdater = os => {
    setURLParam("os", os)
    updateOS(os)
  }

  const packageType = "jdk"

  const [releases, setReleases] = useState<MarketplaceRelease[] | null>(null)

  useEffect(() => {
    ;(async () => {
      setReleases(
        await getAllPkgsForVersion(
          version,
          os,
          arch,
          packageType,
          selectedVendorIdentifiers,
        ),
      )
    })()
  }, [version, os, arch, packageType, selectedVendorIdentifiers])

  return (
    <div className="max-w-[1264px] mx-auto px-6 pb-20">
      <ReleaseSelector
        versions={data.allVersions}
        updateVersion={versionUpdater}
        updateOS={osUpdater}
        updateArch={archUpdater}
      />

      <VendorSelector
        selectedVendorIdentifiers={selectedVendorIdentifiers}
        setSelectedVendorIdentifiers={updateSelectedVendorIdentifiers}
      />
      <div className="hidden md:flex items-center gap-20 border-t border-[#3E3355] pt-5 mb-5 mt-12">
        <p className="text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Build Version
        </p>
        <p className="text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Release Date
        </p>
        <p className="text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Build Date
        </p>
        <p className="text-[#C4BFCE] text-[16px] leading-[24px] mb-0">Vendor</p>
        <p className="text-[#C4BFCE] text-[16px] leading-[24px] mb-0">OS</p>
        <p className="text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Architecture
        </p>
      </div>
      {releases && <AllReleaseCard results={releases} />}
    </div>
  )
}

export default DownloadTable
