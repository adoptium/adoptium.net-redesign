import React, { useState, useCallback, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@gatsbyjs/reach-router"
import queryString from "query-string"
import { Trans } from "gatsby-plugin-react-i18next"
import VendorSelector from "../VendorSelector"
import { detectOS, UserOS } from "../../util/detectOS"
import { setURLParam } from "../../util/setURLParam"
import { capitalize } from "../../util/capitalize"
import { fetchOses, fetchArches} from '../../hooks/fetchConstants'
import { packageTypes, defaultArchitecture, defaultPackageType} from '../../util/defaults'

const DownloadDropdowns = ({ updaterAction, marketplace, Table }) => {

  const data = useStaticQuery(graphql`
    query VersionsQuery {
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
      mostRecentFeatureVersion {
        version
      }
    }
  `)

  // load OS and Arches from API
  const oses = fetchOses(true)
  const arches = fetchArches(true)
  const [ready, setReady] = useState(false)

  // prepare versions list
  const versions = data.allVersions.edges
  let versionList = versions

  const queryStringParams = queryString.parse(useLocation().search)

  const [os, updateOS] = useState('any')
  const [arch, updateArch] = useState('any')
  const [packageType, updatePackageType] = useState('any')
  const [version, udateVersion] = useState(data.mostRecentLts.version)

  // Marketplace vendor selector only
  const [selectedVendorIdentifiers, updateSelectedVendorIdentifiers] = useState<string[]>([])

  const [releases, setReleases] = useState(null)

  /**
   * This useEffect() is called when OS and arches are finaly loaded
   */ 
  useEffect(() => {
    // do nothing while OS and arches are not loaded
    if(oses.length === 0 || arches.length === 0) return;

    (async () => {
      // init the default selected Operation System, if any from the param 'os'
      let defaultSelectedOS = "any"
      const osParam = queryStringParams.os
      if (osParam) {
        let osParamStr = osParam.toString().toLowerCase()
        if (oses.findIndex(os => os.value === osParamStr) >= 0)
          defaultSelectedOS = osParamStr
      }

      // init the default selected Architecture, if any from the param 'arch'
      let defaultSelectedArch = "any"
      const archParam = queryStringParams.arch
      if (archParam) {
        let archParamStr = archParam.toString().toLowerCase()
        if (arches.findIndex(a => a.value === archParamStr) >= 0)
          defaultSelectedArch = archParamStr
      }

      // init the default selected Package Type, if any from the param 'package'
      let defaultSelectedPackageType = "any"
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
          defaultSelectedVersion = versions.sort(
            (a, b) => b.node.version - a.node.version,
          )[0].node.version
        } else if (
          versions.findIndex(version => version.node.version === versionParamNum) >= 0
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

        if (versions.findIndex(version => version.node.version === variantParamNum) >= 0) {
          defaultSelectedVersion = variantParamNum
        }
      }

      if (marketplace) {
        // in marketplace we have to preselect some values in dropdowns if not given in parameters
        if (defaultSelectedOS === "any") {
          const userOS = detectOS()
          switch (userOS) {
            case UserOS.MAC:
              defaultSelectedOS = "mac"
              if (typeof document !== "undefined") {
                let gl = document.createElement("canvas").getContext("webgl")
                // @ts-ignore
                let ext = gl && gl.getExtension("WEBGL_debug_renderer_info")
                // @ts-ignore
                let param = ext && ext.getParameter(d.UNMASKED_RENDERER_WEBGL) || "";
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
        if (defaultSelectedArch === "any") {
          defaultSelectedArch = defaultArchitecture
        }
        if (defaultSelectedPackageType === "any") {
          defaultSelectedPackageType = defaultPackageType
        }
        // filter non LTS versions
        versionList = versions.filter(version => {
          return version.node.lts === true
        })
        if (versionList.findIndex(version => version.node.version === defaultSelectedVersion,) < 0) {
          defaultSelectedVersion = data.mostRecentLts.version
        }
      }

      updateOS(defaultSelectedOS);
      updateArch(defaultSelectedArch);
      udateVersion(defaultSelectedVersion);
      updatePackageType(defaultSelectedPackageType);

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
        setReleases(await updaterAction(version, os, arch, packageType, selectedVendorIdentifiers));
    })();
  }, [ready, version, os, arch, packageType, selectedVendorIdentifiers]);

  const setOS = useCallback(os => {
    setURLParam("os", os)
    updateOS(os)
  }, [])

  const setArch = useCallback(arch => {
    setURLParam("arch", arch)
    updateArch(arch)
  }, [])

  const setPackageType = useCallback(packageType => {
    setURLParam("package", packageType)
    updatePackageType(packageType)
  }, [])

  const setVersion = useCallback(version => {
    setURLParam("version", version)
    udateVersion(version)
  }, [])

  const setSelectedVendorIdentifiers = useCallback(newSelectedVendorIdentifiers => {
    // do not change the URL
    updateSelectedVendorIdentifiers(newSelectedVendorIdentifiers)
  }, [])

  return (
    <>
      {marketplace && (
        <VendorSelector
          selectedVendorIdentifiers={selectedVendorIdentifiers}
          setSelectedVendorIdentifiers={setSelectedVendorIdentifiers}
        />
      )}
      <div className="input-group mb-5 row g-2">
        <div className="input-group-prepend flex-colunm col-12 col-md-3">
          <label className="px-2 fw-bold" htmlFor="os">
            <Trans>Operating System</Trans>
          </label>
          <select
            id="os-filter"
            aria-label="OS Filter"
            data-testid="os-filter"
            onChange={e => setOS(e.target.value)}
            value={os}
            className="form-select form-select-sm"
          >
            <option key="any" value="any">
              <Trans>Any</Trans>
            </option>
            {oses.sort((os1, os2) => os1.name.localeCompare(os2.name))
              .map(
                (os, i): string | JSX.Element =>
                  os && (
                    <option key={`os-${i}`} value={os.value}>
                      {capitalize(os.name)}
                    </option>
                  ),
              )}
          </select>
        </div>
        <div className="input-group-prepend flex-colunm col-12 col-md-3">
          <label className="px-2 fw-bold" htmlFor="arch">
            <Trans>Architecture</Trans>
          </label>
          <select
            id="arch-filter"
            aria-label="Architecture Filter"
            data-testid="arch-filter"
            onChange={e => setArch(e.target.value)}
            value={arch}
            className="form-select form-select-sm"
          >
            <option key="any" value="any">
              <Trans>Any</Trans>
            </option>
            {arches.sort((arch1, arch2) => arch1.name.localeCompare(arch2.name))
              .map(
                (arch, i): string | JSX.Element =>
                  arch && (
                    <option key={`arch-${i}`} value={arch.value}>
                      {arch.name}
                    </option>
                  ),
              )}
          </select>
        </div>
        <div className="input-group-prepend flex-colunm col-12 col-md-3">
          <label className="px-2 fw-bold" htmlFor="package-type">
            <Trans>Package Type</Trans>
          </label>
          <select
            id="package-type-filter"
            aria-label="Package Type Filter"
            data-testid="package-type-filter"
            onChange={e => setPackageType(e.target.value)}
            value={packageType}
            className="form-select form-select-sm"
          >
            <option key="any" value="any">
              <Trans>Any</Trans>
            </option>
            {packageTypes.map(
              (packageType, i): string | JSX.Element =>
                packageType && (
                  <option
                    key={`packageType-${i}`}
                    value={packageType.value}
                  >
                    {packageType.name}
                  </option>
                ),
            )}
          </select>
        </div>
        <div className="input-group-prepend flex-colunm col-12 col-md-3">
          <label className="px-2 fw-bold" htmlFor="version">
            <Trans>Version</Trans>
          </label>
          <select
            id="version-filter"
            aria-label="Version Filter"
            data-testid="version-filter"
            onChange={e => setVersion(e.target.value)}
            value={version}
            className="form-select form-select-sm"
          >
            {versionList.map(
              (version, i): number | JSX.Element =>
                version && (
                  <option key={`version-${i}`} value={version.node.version}>
                    {version.node.label}
                  </option>
                ),
            )}
          </select>
        </div>
      </div>
      <Table results={releases} />
    </>
  )
}

export default DownloadDropdowns
