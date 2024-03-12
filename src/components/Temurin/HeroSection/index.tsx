import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// @ts-ignore
import HeroBgImg from "../../../images/backgrounds/temurin-hero-bg.svg"

import LatestTemurin from "../LatestTemurin"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      mostRecentLts {
        version
      }
    }
  `)

  return (
    <div>
      <div className=" sm:bg-contain bg-temurin-hero bg-center bg-no-repeat relative">
        <div className="relative isolate">
          <div className="absolute sm:hidden top-[80px] z-[-1] left-[50%] translate-x-[-50%]">
            <HeroBgImg alt="background-image" />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="max-w-[1264px] mx-auto flex justify-center items-center">
            <div className="mx-auto max-w-[832px] w-full h-[680px] sm:h-[720px] px-8 lg:px-0 flex items-center">
              <LatestTemurin latestLTS={data.mostRecentLts.version} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
