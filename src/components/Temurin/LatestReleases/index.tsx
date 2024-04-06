import React from "react"
import { Link } from "gatsby-plugin-react-i18next"

import { FaApple, FaWindows } from "react-icons/fa"
import { AdobeIcon2, RedIcon } from "../../Common/Icon"

const LatestReleases = () => {
  const LatestReleasesCard = [
    {
      id: 1,
      redicon: <RedIcon />,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 2,
      redicon: undefined,
      release: undefined,
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 3,
      redicon: undefined,
      release: undefined,
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 4,
      redicon: undefined,
      release: undefined,
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
  ]
  return (
    <>
      <section className="px-6 xl:px-0 flex flex-col items-center justify-center py-8 lg:py-16">
        <h2 className="text-white md:text-[56px] text-5xl font-normal leading-[44px] md:leading-[56px] text-center">
          Latest Releases
        </h2>
        <p className="text-center mt-6 text-[#C4BFCE] text-base font-normal leading-6">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime <br /> binaries that are enterprise-ready and Java SE
          TCK-tested for general use in the Java ecosystem.
        </p>
        <div className="flex xl:flex-nowrap flex-wrap justify-center max-w-[1264px] w-full mx-auto gap-x-8 gap-y-4 pt-10 pb-8  md:py-16 ">
          {LatestReleasesCard.map((card, index) => (
            <div
              key={index}
              className="p-8 release-card     backdrop-blur-12 bg-[#200D46]"
            >
              <div className="mb-8">
                <AdobeIcon2 />
              </div>
              <h3 className="flex items-center gap-2 pb-2 text-[16px] font-bold leading-[150%] text-primary  ">
                <span>{card.redicon}</span>
                {card.release}
              </h3>

              <p className="text-white text-2xl font-normal leading-[133.333%] ">
                {card.content}
              </p>
              <span className=" text-lightgrey tab-button-text block mt-4">
                {card.Date}
              </span>
              <span className=" text-lightgrey tab-button-text block mt-4">
                {card.builddate}
              </span>
              <Link
                to={card.link}
                className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out border-[#FF1464] flex items-center justify-center gap-3 w-[169px] h-[56px] text-white font-bold leading-6 text-base mt-8"
                placeholder={undefined}
              >
                <span>
                  <FaApple />
                </span>
                Download
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center  items-center gap-x-10 sm:gap-y-0 gap-y-6">
          <p className="text-xl text-white font-normal leadig-7 !mb-0 text-center">
            Eclipse Temurin offers high-performance
          </p>
          <Link to="/temurin/releases" placeholder={undefined}>
            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px] ">
              See all Releases
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default LatestReleases
