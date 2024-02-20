import React from "react"
import { Link } from "gatsby-plugin-react-i18next"

import { capitalize } from "../../../util/capitalize"
import { getImageForDistribution } from "../../../hooks"
import { fetchExtension } from "../../../util/fetchExtension"

const AllReleaseCard = ({ results }) => {
  return (
    <div className="mt-8">
      {results.map((release, index) => (
        <div
          key={index}
          className="newscard-2 !blur-0 px-6 py-6 lg:flex  justify-between items-center mt-6"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
            <span className="block md:hidden">
              {getImageForDistribution(release.vendor)}
            </span>
            <div className="lg:w-[160px] mt-3 md:mt-0">
              <h3 className="text-[24px] hidden md:block md:text-[16px] font-bold leading-[133.333%] md:leading-[150%]">
                {release.release_name}
              </h3>
              <h3 className="text-[24px] block md:hidden md:text-[16px] font-bold leading-[133.333%] md:leading-[150%]">
                {release.release_name}
              </h3>
            </div>
            <div className="lg:flex items-center gap-20">
            <p className="text-base font-bold leading-[150%] mb-0  hidden lg:block">
                {capitalize(release.binary.distribution)}
              </p>
              <span className="fill-primary hidden md:block">
                <img
                  className="w-[100px] mb-0"
                  alt={`${release.binary.distribution} logo`}
                  src={getImageForDistribution(release.binary.distribution)}
                />
              </span>
              <p className="text-base text-[#C4BFCE] leading-[150%] mb-0  hidden lg:block">
                {new Date(release.binary.timestamp).toLocaleDateString()}
              </p>
              <p className="text-base text-[#C4BFCE] leading-[150%] hidden lg:block mb-0">
                {capitalize(release.binary.os)}
              </p>
              <p className="text-base text-[#C4BFCE] leading-[150%] mb-0 hidden lg:block">
                {release.binary.architecture}
              </p>
            </div>
          </div>
          <div className="flex items-end justify-between mt-4 md:mt-0 gap-5">
            <Link
              placeholder="Download"
              to={release.binary.package.link}
              className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out border-[#FF1464] flex items-center justify-center gap-3 px-8 py-4 text-white font-bold leading-6 text-base "
            >
              Download ({fetchExtension(release.binary.package.name)})
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllReleaseCard
