import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import HeroSection from "../components/Temurin/HeroSection"
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
      <HeroSection />
      <LogoCarousel />
      <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
      <PowerOfTemurin />
      <DownloadCounter />
      <TemurinFeatures />
      <WGProjects />
      <Testimonials />
      <LatestNews />
      {/* <FAQ /> */}
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
