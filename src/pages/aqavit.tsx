import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

// @ts-ignore
import HeroBgImg from "../images/backgrounds/aqavit-hero-bg.svg"

import LogoCarousel from "../components/LogoCarousel"

const AQAvit = () => {
  return (
    <Layout>
      <div className="bg-purple sm:bg-contain bg-aqavit-hero bg-center bg-no-repeat relative">
        <div className="relative isolate">
          <div className="absolute sm:hidden top-[80px] z-[-1] left-[50%] translate-x-[-50%]">
            <HeroBgImg alt={"background-image"} />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="max-w-[1264px] mx-auto flex justify-center items-center">
            <div className="mx-auto max-w-[832px] w-full h-[680px] sm:h-[720px] px-8 lg:px-0 flex items-center">
              <div className="text-center w-full">
                <h1 className="font-semibold leading-[72px] lg:leading-[120px] text-white-900 text-[64px] lg:text-[104px]">
                  Eclipse AQAvit
                </h1>
                <p className="lg:my-10 mt-6  mb-10 text-2xl leading-8 text-white-600  font-semibold">
                  Some tagline about AQAvit
                </p>
                <div className="mt-10 flex items-center sm:flex-row flex-col-reverse justify-center gap-6">
                  <Link
                    to="/temurin/releases"
                    className="text-base underline transition duration-300 ease-in-out font-bold leading-6 text-white-900"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="#"
                    className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out  border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-base"
                  >
                    Download AQAvit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
    </Layout>
  )
}
export default AQAvit

export const Head = () => <Seo title="Eclipse AQAvit" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
