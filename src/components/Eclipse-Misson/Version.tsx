import React from "react"
import { Link } from "gatsby-plugin-react-i18next"

import { FaApple, FaWindows } from "react-icons/fa"
import { AdobeIcon2, RedIcon } from "../Common/Icon"

const Version = () => {
  const ReleasesHistoryCard = [
    {
      id: 1,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 2,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 3,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 4,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "Release Date: 12 October 2023",
      builddate: "Build Date: 12 October 2023 •  macOS • aarch64",
      link: "/",
    },
  ]
  return (
    <>
      <section className="px-6 xl:px-0 flex flex-col items-center justify-center pt-8 lg:pt-24 lg:pb-0 ">
        <h2 className="text-white text-[36px] leading-[122.222%]  md:text-5xl font-semibold  md:leading-[116.667%] text-center">
          Versions
        </h2>
        <p className="text-center m-0 pt-8 text-lightgrey tab-button-text max-w-[690px] mx-auto">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime binaries that are enterprise-ready and Java SE TCK-tested
          for general use in the Java ecosystem.
        </p>
        <div className="flex xl:flex-nowrap flex-wrap justify-center max-w-[1264px] w-full mx-auto gap-x-8 gap-y-4 pt-10 pb-8  md:py-16 ">
          {ReleasesHistoryCard.map((card, index) => (
            <div
              key={index}
              className="p-8 release-card     backdrop-blur-12 bg-[#200D46]"
            >
              <div className="mb-8">
                <AdobeIcon2 />
              </div>

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
      </section>
    </>
  )
}

export default Version
