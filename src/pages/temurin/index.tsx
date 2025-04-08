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
        title="Want to discuss how Temurin can impact your company?"
        description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
        linkText="Contact Us"
        link="/contact-us"
      />
      {/* <LatestReleases /> */}
      {/* <ReleaseRoadmap /> */}
      <ContactUs title="Connect with the community" buttontitle="Learn More" />
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
