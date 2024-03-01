import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import LogoCarousel from "../components/LogoCarousel"
import HeroSection from "../components/Eclipse-Aqavit/HeroSection"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import Documentation from "../components/Early-Access-Build/Documentation"
import OtherProject from "../components/Eclipse-Aqavit/OtherProject"

const AQAvit = () => {
  return (
    <Layout>
      <HeroSection />
      <PowerOfTemurin
        className={"!py-0 md:!py-24"}
        title="The power of AQAvit"
      />
      <div className="pb-10">
        <Documentation />
      </div>
      <OtherProject />
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
