import React from "react"
import { Link } from "../../Link"
import { RedIcon } from "../../Common/Icon"
import { FaApple, FaWindows } from "react-icons/fa"

const LatestReleases = () => {
  const LatestReleasesCard = [
    {
      id: 1,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 2,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 3,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 4,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
  ]
  return (
    <>
      <section className="px-6 xl:px-0 flex flex-col items-center justify-center py-8 lg:py-16">
        <h2 className="text-white md:text-[56px] text-5xl font-normal leading-[44px] md:leading-[56px] text-center">
          Latest Releases
        </h2>
        <p className="text-center mt-6 text-grey text-base font-normal leading-6">
          Download your needed build
        </p>
        <div className="flex xl:flex-nowrap flex-wrap justify-center max-w-[1264px] w-full mx-auto gap-x-8 gap-y-4 py-16">
          {LatestReleasesCard.map((card, index) => (
            <div
              key={index}
              className="p-8 border-[2px] border-2 border-white/50 rounded-3xl bg-tones-white backdrop-blur-12"
            >
              {index === 0 && (
                <h2 className="text-primary text-base leading-6 font-normal flex items-center gap-x-3">
                  <span className="">
                    <RedIcon />
                  </span>
                  {card.release}
                </h2>
              )}
              <p className="text-white text-2xl font-normal leading-8 mt-2">
                {card.content}
              </p>
              <span className="text-base text-grey font-normal leading-6 block mt-4">
                {card.Date}
              </span>
              <Link
                to={card.link}
                className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out border-[#FF1464] flex items-center justify-center gap-3 w-[169px] h-[56px] text-white font-bold leading-6 text-base mt-8"
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
            Get other platforms and versions
          </p>
          <Link to="/temurin/releases">
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
