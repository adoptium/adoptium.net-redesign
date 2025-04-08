import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import PlatformMatrix from "../components/Support/PlatformMatrix"
import ReleaseRoadmap from "../components/Temurin/ReleaseRoadmap"
import ContactUs from "../components/ContactUs"
import DocumentationGrid from "../components/Documentation/DocumentationGrid"

const SupportedPlatforms = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Supported Platforms"
          title="Supported Platforms"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <PlatformMatrix />
        {/* <ReleaseRoadmap /> */}
        <ContactUs
          title={"Connect with the community"}
          className={"md:py-28 py-12"}
          buttontitle="Learn More"
        />
        <div className="py-10">
          <DocumentationGrid />
        </div>
      </Layout>
    </>
  )
}

export default SupportedPlatforms

export const Head = () => <Seo title="Temurin&trade; Supported Platforms" />

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
