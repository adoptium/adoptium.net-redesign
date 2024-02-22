import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { useLocation } from "@gatsbyjs/reach-router"
import queryString from "query-string"

import ReleaseSelector from "../../Temurin/ReleaseSelector"
import VendorSelector from "../VendorSelector"
import AllReleaseCard from "../AllReleaseCard"

import { setURLParam } from "../../../util/setURLParam"
import { detectOS, UserOS } from "../../../util/detectOS"
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

  // init the default selected Architecture, if any from the param 'arch'
  let defaultSelectedArch = defaultArchitecture
  const archParam = queryStringParams.arch
  if (archParam) {
    let sap = archParam.toString().toLowerCase()
    if (arches.findIndex(a => a.value.toLowerCase() === sap) >= 0)
      defaultSelectedArch = sap
  }

  // init the default selected Operation System, if any from the param 'os'
  let defaultSelectedOS = ""
  const osParam = queryStringParams.os
  if (osParam) {
    let sop = osParam.toString().toLowerCase()
    if (oses.findIndex(os => os.value.toLowerCase() === sop) >= 0)
      defaultSelectedOS = sop
  } else {
    const userOS = detectOS()
    switch (userOS) {
      case UserOS.MAC:
        defaultSelectedOS = "mac"
        if (typeof document !== "undefined") {
          let w = document.createElement("canvas").getContext("webgl")
          // @ts-ignore
          let d = w.getExtension("WEBGL_debug_renderer_info")
          // @ts-ignore
          let g = (d && w.getParameter(d.UNMASKED_RENDERER_WEBGL)) || ""
          if (g.match(/Apple/) && !g.match(/Apple GPU/)) {
            defaultSelectedArch = "aarch64"
          }
        }
        break
      case UserOS.LINUX:
      case UserOS.UNIX:
        defaultSelectedOS = "linux"
        break
      default:
        defaultSelectedOS = "windows"
        break
    }
  }

  // init the default selected Package Type, if any from the param 'package'
  let defaultSelectedPackageType = defaultPackageType
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
  const [packageType, updatePackageType] = useState(defaultSelectedPackageType)

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
        marketplace
        versions={data.allVersions}
        updateVersion={versionUpdater}
        defaultVersion={version}
        updateOS={osUpdater}
        defaultOS={os}
        updateArch={archUpdater}
        defaultArch={arch}
        updatePackageType={updatePackageType}
      />

      <VendorSelector
        selectedVendorIdentifiers={selectedVendorIdentifiers}
        setSelectedVendorIdentifiers={updateSelectedVendorIdentifiers}
      />
      <div className="hidden md:flex items-center gap-20 border-t border-[#3E3355] pt-5 mb-5 mt-12">
        <p className="text-grey text-[16px] leading-[24px] mb-0">
          <Trans>Build Version</Trans>
        </p>
        <p className="text-grey text-[16px] leading-[24px] mb-0">
          <Trans>Distribution</Trans>
        </p>
        <p className="text-grey text-[16px] leading-[24px] mb-0">
          <Trans>Vendor</Trans>
        </p>
        <p className="text-grey text-[16px] leading-[24px] mb-0">Build Date</p>
        <p className="text-grey text-[16px] leading-[24px] mb-0">
          <Trans>Operating System</Trans>
        </p>
        <p className="text-grey text-[16px] leading-[24px] mb-0">
          <Trans>Architecture</Trans>
        </p>
      </div>
      {releases && <AllReleaseCard results={releases} />}
    </div>
  )
}

export default DownloadTable
