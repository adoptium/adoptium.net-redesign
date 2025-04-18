import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

import HeroSection from "../../components/Temurin/HeroSection"
import LogoCarousel from "../../components/LogoCarousel"
import PowerOfTemurin from "../../components/Temurin/PowerOfTemurin"
import InstallationGuideCard from "../../components/Temurin/InstallationGuideCard"
import ImageText from "../../components/ImageText"
import LatestReleases from "../../components/Temurin/LatestReleases"
import ReleaseRoadmap from "../../components/Temurin/ReleaseRoadmap"
import ContactUs from "../../components/ContactUs"

const Index = ({ data }) => {
  return (
    <Layout>
      <HeroSection />
      <LogoCarousel />
      <PowerOfTemurin />
      <InstallationGuideCard />
      <ImageText
        title="Want to discuss how Temurin can positively impact your company?"
        description="Whether you are looking for opportunities for cost-savings, or a selection of choices for commercial support, or if you want to bolster security around your software supply chain, we would love to discuss how using Temurin brings a variety of benefits to your enterprise."
        linkText="Contact Us"
        link="/slack"
      />
      {/* <LatestReleases /> */}
      {/* <ReleaseRoadmap /> */}
      <ContactUs
        title="Connect with the community"
        buttontitle="Learn More"
        linkTo="/join" 
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
