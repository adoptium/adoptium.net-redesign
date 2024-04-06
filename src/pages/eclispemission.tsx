import React from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/Eclipse-Misson/HeroSection"
import Version from "../components/Eclipse-Misson/Version"
import Documentation from "../components/Early-Access-Build/Documentation"
import LogoCarousel from "../components/LogoCarousel"
import OtherProject from "../components/Eclipse-Aqavit/OtherProject"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const eclispemission = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Version />
        <Documentation />
        <div className="h-[1px] my-6 w-full bg-[#3E3355]"></div>
        <LogoCarousel className={"py-14 lg:py-28"} />
        <OtherProject />
      </Layout>
    </>
  )
}

export default eclispemission

export const Head = () => <Seo title="Eclipse Mission Control" />

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
