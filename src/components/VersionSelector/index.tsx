import React, { useState, useCallback, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { useLocation } from "@gatsbyjs/reach-router"
import queryString from "query-string"

import { setURLParam } from "../../util/setURLParam"

const VersionSelector = ({ updater, releaseType, Table }) => {
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

  const defaultVersion = data.mostRecentLts.version
  const mostRecentFeatureVersion = data.mostRecentFeatureVersion.version
  const versions = data.allVersions.edges

  const { language } = useI18next()

  let selectedVersion = defaultVersion
  const versionParam = queryString.parse(useLocation().search).version
  if (versionParam) {
    selectedVersion = Number(versionParam)
  }
  const variantParam = queryString.parse(useLocation().search).variant
  if (variantParam) {
    // convert openjdk11 to 11
    const parsedVersion = variantParam.toString().replace(/\D/g, "")
    setURLParam("version", parsedVersion)
    selectedVersion = parseInt(parsedVersion)
  }

  const [version, udateVersion] = useState(selectedVersion.toString())
  const [numBuilds, udateNumBuilds] = useState(5)
  const [page, updatePage] = useState(0)
  const [buildDate, updateBuildDate] = useState<Date>(new Date())
  const [releases, setReleases] = useState(null)

  useEffect(() => {
    (async () => {
      setReleases(
        await updater(version, releaseType, numBuilds, buildDate, page),
      )
    })()
  }, [version, numBuilds, buildDate, page])

  const setVersion = useCallback(version => {
    setURLParam("version", version)
    udateVersion(version)
  }, [])

  const setNumBuilds = useCallback(number => {
    udateNumBuilds(number)
  }, [])

  const versionsToDisplay = [...versions]

  if(releaseType === "ea") {
    // if releaseType is "ea", add missing "ea" versions up to mostRecentFeatureVersion
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

    // https://github.com/adoptium/adoptium.net/issues/3016
    // johnoliver: "assume that there are EA versions for versions between 16 and most_recent_feature_version"
    const sixteenToLastEA = range(16, mostRecentFeatureVersion, 1)

    sixteenToLastEA.forEach(version => {
      if(versionsToDisplay.findIndex(v => v.node.version === version) < 0) {
        // this version number is missing, append to the version list
        const v = {
          node: {
            id: version,
            version: version,
            label: `${version} - EA`
          }
        }
        versionsToDisplay.push(v)
      }
    })

    // sort by version DESC
    versionsToDisplay.sort((v1, v2) => v2.node.version - v1.node.version)
  }

  return (
    <>
      <div className="max-w-3xl mx-auto my-8">
        <h3 className="text-xl text-white mb-4 font-medium text-center">
          <Trans>
            Select options to filter the list of nightly builds
          </Trans>
        </h3>
        
        <div className="bg-[#26193F] rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-center">
            <div className="w-full md:w-auto">
              <label className="block text-gray-300 mb-2 font-medium" htmlFor="version">
                <Trans>Version</Trans>
              </label>
              <select
                data-testid="version-filter"
                aria-label="version-filter"
                id="version-filter"
                onChange={e => setVersion(e.target.value)}
                value={version}
                className="w-full md:w-auto px-4 py-2 bg-[#200E46] border border-[#3E3355] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF1464]"
              >
                {/* loop through versions array from graphql */}
                {versionsToDisplay.map(
                  (version, i): number | JSX.Element =>
                    version && (
                      <option key={version.node.id || i} value={version.node.version}>
                        {version.node.label}
                      </option>
                    ),
                )}
              </select>
            </div>
            
            {releaseType === "ea" && (
              <>
                <div className="w-full md:w-auto">
                  <label className="block text-gray-300 mb-2 font-medium" htmlFor="build-num-filter">
                    <Trans>Number of builds</Trans>
                  </label>
                  <select
                    data-testid="build-num-filter"
                    aria-label="Filter by number of builds"
                    id="build-num-filter"
                    onChange={e => setNumBuilds(e.target.value)}
                    defaultValue={numBuilds}
                    className="w-full md:w-auto px-4 py-2 bg-[#200E46] border border-[#3E3355] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF1464]"
                  >
                    <option key={1} value={1}>1</option>
                    <option key={5} value={5}>5</option>
                    <option key={10} value={10}>10</option>
                    <option key={20} value={20}>20</option>
                    <option key={50} value={50}>50</option>
                  </select>
                </div>

                <div className="w-full md:w-auto">
                  <label className="block text-gray-300 mb-2 font-medium" htmlFor="build-date">
                  <Trans>Builds prior to</Trans>
                  </label>
                  <input
                  id="build-date"
                  type="date"
                  className="w-full md:w-auto px-4 py-2 bg-[#200E46] border border-[#3E3355] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF1464] date-picker"
                  value={buildDate.toISOString().split("T")[0]}
                  max={new Date().toISOString().split("T")[0]}
                  aria-label="Build Date"
                  onChange={e => {
                    const date = new Date(e.target.value)
                    if (!isNaN(date.getTime())) {
                    updateBuildDate(date)
                    }
                  }}
                  />
                  <style>{`
                  .date-picker::-webkit-calendar-picker-indicator {
                    filter: invert(39%) sepia(76%) saturate(7464%) hue-rotate(324deg) brightness(98%) contrast(105%);
                  }
                  `}</style>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Table results={releases} updatePage={updatePage} />
    </>
  )
}

export default VersionSelector
