import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

// @ts-ignore
import HeroBgImg from "../images/backgrounds/temurin-hero-bg.svg"

import LatestTemurin from "../components/Temurin/LatestTemurin"
import LogoCarousel from "../components/LogoCarousel"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import DownloadCounter from "../components/Temurin/DownloadCounter"
import TemurinFeatures from "../components/Temurin/Features"
import WGProjects from "../components/WGProjects"
import Testimonials from "../components/Testimonials"
import LatestNews from "../components/LatestNews"
import FAQ from "../components/FAQ"
import Contributors from "../components/Contributors/home"

const Index = ({ data }) => {
  return (
    <Layout page="home">
      <div className="bg-purple sm:bg-contain bg-temurin-hero bg-center bg-no-repeat relative">
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
      <LogoCarousel />
      <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
      <PowerOfTemurin />
      <DownloadCounter />
      <TemurinFeatures />
      <WGProjects />
      <Testimonials className={undefined} />
      <LatestNews />
      <FAQ className={undefined} />
      <Contributors />
    </Layout>
  )
}
export default Index

export const Head = () => <Seo title="Home" />

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
    mostRecentLts {
      version
    }
  }
`
