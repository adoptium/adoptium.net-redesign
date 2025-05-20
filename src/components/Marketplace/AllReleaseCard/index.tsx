import React, { useState } from "react"
import { Link } from "../../Link"
import { BsCopy } from "react-icons/bs"
import { FiDownload, FiInfo } from "react-icons/fi"
import ChecksumModal from "../../ChecksumModal"

import { capitalize } from "../../../util/capitalize"
import { getImageForDistribution } from "../../../hooks"
import { fetchExtension } from "../../../util/fetchExtension"

const AllReleaseCard = ({ results }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentChecksum, setCurrentChecksum] = useState("")

  const openModalWithChecksum = checksum => {
    setCurrentChecksum(checksum)
    setModalOpen(true)
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
