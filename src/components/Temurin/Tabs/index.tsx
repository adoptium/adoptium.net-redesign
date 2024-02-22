import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@gatsbyjs/reach-router"
import queryString from "query-string"

import VersionSelector from "../VersionSelector"
import ButtonContent from "../ButtonContent"
import Heading from "../Heading"
import ReleaseSelector from "../ReleaseSelector"

import { setURLParam } from "../../../util/setURLParam"

import { oses, arches, packageTypes } from "../../../util/defaults"

const Tabs = ({ updaterAction, Table, openModalWithChecksum }) => {
  const data = useStaticQuery(graphql`
    query TabVersionsQuery {
      allVersions(sort: { version: DESC }) {
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

  const LTSVersions = data.allVersions.edges.filter(
    version => version.node.lts === true,
  )

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
      defaultSelectedVersion = LTSVersions.sort(
        (a, b) => b.node.version - a.node.version,
      )[0].node.version
    } else if (
      LTSVersions.findIndex(version => version.node.version === nvp) >= 0
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

    if (LTSVersions.findIndex(version => version.node.version === nvp) >= 0) {
      defaultSelectedVersion = nvp
    }
  }

  const [os, updateOS] = useState(defaultSelectedOS)
  const [arch, updateArch] = useState(defaultSelectedArch)
  const [version, udateVersion] = useState(defaultSelectedVersion)

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

  const [releases, setReleases] = useState(null)

  useEffect(() => {
    ;(async () => {
      setReleases(await updaterAction(version, os, arch))
    })()
  }, [version, os, arch])

  const [active, setActive] = useState(data.mostRecentLts.version)
  return (
    <>
      <section className="py-8 md:pt-16 px-6 w-full">
        <div className="w-full flex flex-col items-start justify-start sm:items-center sm:justify-center">
          <VersionSelector
            active={active}
            setActive={setActive}
            versions={LTSVersions}
            updateVersion={udateVersion}
            defaultVersion={data.mostRecentLts.version}
          />
          {active === 1 ? (
            <ReleaseSelector
              versions={data.allVersions}
              updateVersion={versionUpdater}
              updateOS={osUpdater}
              updateArch={archUpdater}
            />
          ) : (
            <ButtonContent results={releases} />
          )}
        </div>
      </section>
      <Heading />
      <Table results={releases} openModalWithChecksum={openModalWithChecksum} />
    </>
  )
}

export default Tabs
