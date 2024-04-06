import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import Documentation from "../components/Early-Access-Build/Documentation"
import AllReleases from "../components/Early-Access-Build/AllReleases"
import ApiInformation from "../components/Early-Access-Build/ApiInformation"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const earlybuild = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Early Access Builds"
          title="Early Access Builds"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"max-w-[860px] mx-auto px-2"}
        />

        <AllReleases />
        <ApiInformation />
        <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
        <Documentation />
      </Layout>
    </>
  )
}

export default earlybuild

export const Head = () => <Seo title="Early Access Build" />

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
