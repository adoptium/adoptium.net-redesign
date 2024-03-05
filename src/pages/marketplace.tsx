import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/Layout"
import AboutEclipseCard from "../components/MarketPlace/AboutEclipseCard"
import MarketPlaceAll from "../components/MarketPlace/MarketPlaceAll"
import PageHeader from "../components/PageHeader"
import Seo from "../components/Seo"

const DownloadPage = () => (
  <Layout>
    <PageHeader
      subtitle="Marketplace"
      title="Adoptium® Marketplace"
      description="Java™ is the world's leading programming language and platform. The Adoptium Marketplace promotes high-quality, TCK certified and AQAvit verified runtimes for use across the Java ecosystem."
      className={"mx-auto max-w-[1048px] px-2 w-full"}
    />
    <MarketPlaceAll />
    <AboutEclipseCard />
  </Layout>
)

export default DownloadPage

export const Head = () => <Seo title="Marketplace" />

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
