import React, { useState } from "react"
import { Link } from "../../Link"
import { BsCopy } from "react-icons/bs"
import { FiDownload, FiInfo } from "react-icons/fi"
import { FaRedo } from "react-icons/fa"
import ChecksumModal from "../../ChecksumModal"
import AnimatedPlaceholder from "../../AnimatedPlaceholder"

import { capitalize } from "../../../util/capitalize"
import { getImageForDistribution } from "../../../hooks"
import { fetchExtension } from "../../../util/fetchExtension"

interface AllReleaseCardProps {
  results: any[] | null
  onReset?: () => void
}

const AllReleaseCard: React.FC<AllReleaseCardProps> = ({ results, onReset }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentChecksum, setCurrentChecksum] = useState("")

  const openModalWithChecksum = checksum => {
    setCurrentChecksum(checksum)
    setModalOpen(true)
  }

  // Loading state with sleek animated placeholders
  if (results === null) {
    return (
      <div className="mt-8 space-y-6">
        {/* Create 3 skeleton cards for the loading state */}
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="newscard-2 !blur-0 px-6 py-6 lg:flex justify-between items-center hover:shadow-xl transition-all duration-300 rounded-2xl bg-gradient-to-r from-[#200E46]/80 to-[#2B1A4F]/80 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center flex-1">
              <AnimatedPlaceholder>
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center flex-1">
                  <div className="lg:w-[160px]">
                    <div className="h-6 bg-gray-600 rounded w-32 animate-pulse"></div>
                  </div>
                  <div className="lg:flex items-center gap-20 flex-1">
                    <div className="h-5 bg-gray-600 rounded w-24 animate-pulse"></div>
                    <div className="w-[100px] h-[60px] bg-gray-600 rounded-xl animate-pulse"></div>
                    <div className="h-5 bg-gray-600 rounded w-20 animate-pulse"></div>
                    <div className="h-5 bg-gray-600 rounded w-16 animate-pulse"></div>
                    <div className="h-5 bg-gray-600 rounded w-14 animate-pulse"></div>
                  </div>
                </div>
              </AnimatedPlaceholder>
            </div>
            <div className="flex items-end justify-between mt-4 md:mt-0 gap-5">
              <div className="flex gap-3">
                <div className="h-10 bg-gray-600 rounded-full w-24 animate-pulse"></div>
                <div className="h-10 bg-gray-600 rounded-full w-32 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // No results state with reset option
  if (results && results.length === 0) {
    return (
      <div className="mt-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center space-y-6 max-w-md">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#2B1A4F] to-[#3E3355] rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">No distributions found</h3>
              <p className="text-gray-400 leading-relaxed">
                No Java distributions match your current filter criteria. Try adjusting your selections or reset all filters to see available distributions.
              </p>
            </div>
            {onReset && (
              <button
                onClick={onReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-pink-500/25"
              >
                <FaRedo className="w-4 h-4" />
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <ChecksumModal open={modalOpen} setOpen={setModalOpen} checksum={currentChecksum} />
      {results.map((release, index) => (
        <div
          key={index}
          className="newscard-2 !blur-0 px-6 py-6 lg:flex justify-between items-center mt-6 hover:shadow-xl transition-all duration-300 rounded-2xl bg-gradient-to-r from-[#200E46]/80 to-[#2B1A4F]/80 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
            <span className="block md:hidden">
              <img
                className="w-[100px] mb-0"
                alt={`${release.vendor} logo`}
                src={getImageForDistribution(release.vendor)}
              />
            </span>
            <div className="lg:w-[160px] mt-3 md:mt-0">
              <h3 className="text-[24px] hidden md:block md:text-[16px] font-bold leading-[133.333%] md:leading-[150%] text-white">
                {release.release_name}
              </h3>
              <h3 className="text-[24px] block md:hidden md:text-[16px] font-bold leading-[133.333%] md:leading-[150%] text-white">
                {release.release_name}
              </h3>
            </div>
            <div className="lg:flex items-center gap-20">
              <p className="text-base font-bold leading-[150%] mb-0 hidden lg:block w-[140px] text-white">
                {capitalize(release.binary.distribution)}
              </p>
              <span className="fill-primary hidden md:block" style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
                <img
                  className="w-[100px] mb-0"
                  alt={`${release.binary.distribution} logo`}
                  src={getImageForDistribution(release.binary.distribution)}
                />
              </span>
              <p className="text-base text-gray-300 leading-[150%] mb-0 hidden lg:block">
                {new Date(release.binary.timestamp).toLocaleDateString()}
              </p>
              <p className="text-base text-gray-300 leading-[150%] hidden lg:block mb-0">
                {capitalize(release.binary.os)}
              </p>
              <p className="text-base text-gray-300 leading-[150%] mb-0 hidden lg:block">
                {release.binary.architecture}
              </p>
            </div>
          </div>
          <div className="flex items-end justify-between ml-3 mt-4 md:mt-0 gap-5">
            <div className="flex gap-3">
              <button 
                onClick={() => openModalWithChecksum(release.binary.package.sha256sum)}
                className="rounded-[20px] px-3 py-2 flex items-center justify-center bg-[#2B1A4F] hover:bg-[#3B2A5F] transition-all border border-[#5A4D76] hover:border-[#6A5D86] text-white text-sm gap-2"
                aria-label="View checksum"
                title="View checksum"
              >
                <BsCopy className="h-4 w-4" /> Checksum
              </button>
              <Link
                placeholder="Download"
                to="/download"
                state={{
                  link: release.binary.package.link,
                  checksum: release.binary.package.checksum,
                  os: release.binary.os,
                  arch: release.binary.architecture,
                  pkg_type: release.binary.package.type,
                  java_version: release.release_name,
                  vendor: release.vendor,
                }}
                className="rounded-[20px] hover:shadow-lg transition-all duration-300 bg-[#FF1464] border-0 ease-in-out flex items-center justify-center gap-2 px-4 py-2 text-white font-medium text-sm"
              >
                <FiDownload className="h-4 w-4" /> 
                <span>Download ({fetchExtension(release.binary.package.name)})</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllReleaseCard
