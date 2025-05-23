import * as React from "react"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { capitalize } from "../../util/capitalize"
import { localeDate } from "../../util/localeDate"
import { Link } from "../Link"

const getFileName = (link: URL) => {
  return link.toString().split('/').slice(-1).join('');
}

const TemurinNightlyTable = ({ results, openModalWithChecksum }) => {
  const { language } = useI18next()

  if (!results || !results.releases || results.releases.length === 0) {
    return (
      <div className="bg-[#26193F] rounded-xl p-6 text-center">
        <p className="text-white text-lg">No nightly builds available for the selected version.</p>
      </div>
    )
  }

  return (
    <div id="nightly-list" className="overflow-x-auto">
      <div className="rounded-xl overflow-hidden mb-8 shadow-md">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#200E46]">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">Platform</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">Type</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">Build/Tag</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">Date</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">Binary</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">Installer</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white tracking-wider">SHA256</th>
            </tr>
          </thead>
          <tbody className="bg-[#26193F] divide-y divide-gray-700">
            {results.releases.map(
              (release, i): string | JSX.Element =>
                release &&
                Object.keys(release.platforms).map(function (key) {
                  return release.platforms[key].assets.map(
                    (asset, i): string | JSX.Element =>
                      asset && (
                        <tr
                          key={`${key}-${asset.type}`}
                          className="hover:bg-[#2B1A4F] transition-colors duration-150"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {capitalize(asset.os)}{" "}
                            {asset.architecture === "x32"
                              ? "x86"
                              : asset.architecture}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{asset.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{release.release_name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{localeDate(release.timestamp, language)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Link
                              title={getFileName(asset.link)}
                              to="/download"
                              state={{
                                link: asset.link,
                                checksum: asset.checksum,
                                os: capitalize(key.split("-")[0]?.toString() || ""),
                                arch: key.split("-")[1]?.toString() || "",
                                pkg_type: asset.type,
                                java_version: "nightly",
                              }}
                              className="text-[#FF1464] hover:text-[#FF5A8F] hover:underline"
                            >{`${asset.extension} (${asset.size} MB)`}</Link>
                          </td>
                          {asset.installer_link ? (
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <Link
                                title={getFileName(asset.installer_link)}
                                to="/download"
                                state={{
                                  link: asset.installer_link,
                                  checksum: asset.installer_checksum,
                                }}
                                className="text-[#FF1464] hover:text-[#FF5A8F] hover:underline"
                              >
                                {asset.installer_extension}
                              </Link>
                            </td>
                          ) : (
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              <Trans i18nKey='download.not.available' defaults='Not Available' />
                            </td>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => openModalWithChecksum && openModalWithChecksum(asset.checksum)}
                              className="text-[#FF1464] hover:text-[#FF5A8F] hover:underline cursor-pointer"
                            >
                              <Trans>Checksum</Trans>
                            </button>
                          </td>
                        </tr>
                      ),
                  )
                }),
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TemurinNightlyTable
