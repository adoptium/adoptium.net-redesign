import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

// @ts-ignore
import HeroBgImg from "../../images/backgrounds/temurin-hero-bg.svg"

import LatestTemurin from "../../components/Temurin/LatestTemurin"
import LogoCarousel from "../../components/LogoCarousel"
import PowerOfTemurin from "../../components/Temurin/PowerOfTemurin"
import HeroSection from "../../components/Eclipse-Temurin/HeroSection"
import InstallationGuideCard from "../../components/Eclipse-Temurin/InstallationGuideCard"
import WantToDiscuss from "../../components/Eclipse-Temurin/WantToDiscuss"
import ReleaseHistory from "../../components/Eclipse-Temurin/ReleaseHistory"
import ReleaseRoadMap from "../../components/Eclipse-Temurin/ReleaseRoadMap"
import ContactUs from "../../components/ContactUs"

const Index = ({ data }) => {
  return (
    <Layout>
      <HeroSection />
      <LogoCarousel />
      <PowerOfTemurin />
      <InstallationGuideCard />
      <WantToDiscuss />
      <ReleaseHistory />
      <ReleaseRoadMap />
      <ContactUs
        title={"Connect with the community"}
        className={undefined}
        buttontitle="Learn More"
      />
    </Layout>
  )
}
export default Index

export const Head = () => <Seo title="Eclipse Temurin" />

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
