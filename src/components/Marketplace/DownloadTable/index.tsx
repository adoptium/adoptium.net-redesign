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
import { fetchOses, fetchArches} from '../../../hooks/fetchConstants'
import { packageTypes, defaultArchitecture, defaultPackageType} from '../../../util/defaults'

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

  // load OS and Arches from API
  const oses = fetchOses(true)
  const arches = fetchArches(true)
  const [ready, setReady] = useState(false)

  const queryStringParams = queryString.parse(useLocation().search)

  const [os, updateOS] = useState("")
  const [arch, updateArch] = useState(defaultArchitecture)
  const [version, udateVersion] = useState(data.mostRecentLts.version)
  const [packageType, updatePackageType] = useState(defaultPackageType)

  const [selectedVendorIdentifiers, updateSelectedVendorIdentifiers] = useState<string[]>([])

  const [releases, setReleases] = useState<MarketplaceRelease[] | null>(null)

  /**
   * This useEffect() is called when OS and arches are finaly loaded
   */ 
  useEffect(() => {
    // do nothing while OS and arches are not loaded
    if(oses.length === 0 || arches.length === 0) return;

    (async () => {
      // init the default selected Architecture, if any from the param 'arch'
      let defaultSelectedArch = defaultArchitecture
      const archParam = queryStringParams.arch
      if (archParam) {
        let archParamStr = archParam.toString().toLowerCase()
        if (arches.findIndex(a => a.value === archParamStr) >= 0)
          defaultSelectedArch = archParamStr
      }

      // init the default selected Operation System, if any from the param 'os'
      let defaultSelectedOS = ""
      const osParam = queryStringParams.os
      if (osParam) {
        let osParamStr = osParam.toString().toLowerCase()
        if (oses.findIndex(os => os.value === osParamStr) >= 0)
          defaultSelectedOS = osParamStr
      } else {
        const userOS = detectOS()
        switch (userOS) {
          case UserOS.MAC:
            defaultSelectedOS = "mac"
            if (typeof document !== "undefined") {
              let gl = document.createElement("canvas").getContext("webgl")
              // @ts-ignore
              let ext = gl && gl.getExtension("WEBGL_debug_renderer_info")
              // @ts-ignore
              let param = (ext && ext.getParameter(d.UNMASKED_RENDERER_WEBGL)) || ""
              if (param.match(/Apple/) && !param.match(/Apple GPU/)) {
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
        let packageParamStr = packageParam.toString().toLowerCase()
        if (packageTypes.findIndex(p => p.value === packageParamStr) >= 0)
          defaultSelectedPackageType = packageParamStr
      }

      // init the default selected Version, if any from the param 'version' or from 'variant'
      let defaultSelectedVersion = data.mostRecentLts.version
      const versionParam = queryStringParams.version
      if (versionParam) {
        let versionParamStr = versionParam.toString()
        let versionParamNum = Number(versionParamStr)

        if (versionParamStr.toLowerCase() === "latest") {
          // get the latest version of the list
          defaultSelectedVersion = data.allVersions.sort(
            (a, b) => b.node.version - a.node.version,
          )[0].node.version
        } else if (
          data.allVersions.edges.findIndex(
            version => version.node.version === versionParamNum,
          ) >= 0
        ) {
          defaultSelectedVersion = versionParamNum
        }
      }

      // init the default selected Version, if any from the param 'variant'
      const variantParam = queryStringParams.variant
      if (variantParam) {
        // convert openjdk11 to 11
        const parsedVersion = variantParam.toString().replace(/\D/g, "")
        let variantParamNum = Number(parsedVersion)

        if (data.allVersions.findIndex(version => version.node.version === variantParamNum) >= 0) {
          defaultSelectedVersion = variantParamNum
        }
      }

      osUpdater(defaultSelectedOS);
      archUpdater(defaultSelectedArch);
      versionUpdater(defaultSelectedVersion);

      // OK we can loaded elements
      setReady(true)
    })();
  }, [oses, arches]);

  /**
   * This useEffect() is called when a parameter is changed
   */
  useEffect(() => {
    // do nothing while params are not ready
    if(!ready) return

    (async () => {
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
  }, [ready, version, os, arch, packageType, selectedVendorIdentifiers])

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
