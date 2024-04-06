import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import WaysSupport from "../components/Support-us/WaysSupport"
import MediaAndPromotion from "../components/Support-us/Media&Promotion"
import ContactUs from "../components/ContactUs"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const supportUs = () => {
  return (
    <>
      <Layout>
        <PageHeader
          title="What we’re trying to achieve"
          subtitle="Support Us"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"max-w-[860px] mx-auto"}
        />
        <WaysSupport />
        <MediaAndPromotion />
        <ContactUs
          title={"Connect with the community"}
          className={undefined}
          buttontitle="Learn More"
        />
      </Layout>
    </>
  )
}

export default supportUs

export const Head = () => <Seo title="Support Us" />

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
