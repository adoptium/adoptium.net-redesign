import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navbar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import ContactUs from "../components/ContactUs"
import WaysToSupport from "../components/Support/WaysToSupport"
import MediaAndPromotion from "../components/Support/MediaAndPromotion"

const SupportUs = () => {
  return (
    <Layout>
      <PageHeader
        title="What we’re trying to achieve"
        subtitle="Support Us"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <WaysToSupport />
      <MediaAndPromotion />
      <ContactUs
        title="Connect with the community"
        buttontitle="Learn More"
        description="Join our Slack channel to discuss work and reach out to project maintainers."
        linkTo="/slack" 
      />
    </Layout>
  )
}

export default SupportUs

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
  }
`
