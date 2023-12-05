import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import { AppleIcon, HeroBgImg } from "../components/Common/Icon"

import LogoCarousel from "../components/LogoCarousel"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import DownloadCounter from "../components/Temurin/DownloadCounter"
import TemurinFeatures from "../components/Temurin/Features"
import WGProjects from "../components/WGProjects"
import Testimonials from "../components/Testimonials"
import LatestNews from "../components/LatestNews"
import FAQ from "../components/FAQ"
import Contributors from "../components/Contributors/home"

const Index = () => {
  return (
    <Layout>
      <div className="bg-purple sm:bg-contain bg-img-hero bg-center bg-no-repeat relative">
        <div className="relative isolate">
          <div className="absolute sm:hidden top-[80px] z-[-1] left-[50%] translate-x-[-50%]">
            <HeroBgImg />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="max-w-[1264px] mx-auto flex justify-center items-center">
            <div className="mx-auto max-w-[832px] w-full h-[680px] sm:h-[720px] px-8 lg:px-0 flex items-center">
              <div className="text-center w-full">
                <h1 className="font-semibold leading-[72px] lg:leading-[120px] text-white-900 text-[64px] lg:text-[104px]">
                  The Power of Eclipse Temurin™
                </h1>
                <p className="lg:my-10 mt-6  mb-10 text-2xl leading-8 text-white-600  font-semibold">
                  Download Temurin™ for macOS aarch64
                </p>
                <div className="mt-10 flex items-center sm:flex-row flex-col-reverse justify-center gap-6">
                  <a
                    href="#"
                    className="text-base underline transition duration-300 ease-in-out font-bold leading-6 text-white-900"
                  >
                    Learn More
                  </a>
                  <a
                    href="#"
                    className="rounded-[80px] bg-[#FF1464] hover:bg-transparent border transition duration-300 ease-in-out hover:text-[#FF1464] border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-base"
                  >
                    <span>
                      <AppleIcon />
                    </span>
                    Download Temurin™
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
      <PowerOfTemurin />
      <DownloadCounter />
      <TemurinFeatures />
      <WGProjects />
      <Testimonials />
      <LatestNews />
      <FAQ />
      <Contributors />
    </Layout>
  )
}
export default Index

export const Head = () => (
  <Seo title='Home' />
)

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mostRecentLts {
      version
    }
  }
`
