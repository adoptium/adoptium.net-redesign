import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/Working-Form/ContactForm"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const sponsorform = () => {
  return (
    <Layout>
      <PageHeader
        title="Become a sponsor"
        subtitle="Become a sponsor"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <ContactForm />
    </Layout>
  )
}

export default sponsorform

export const Head = () => <Seo title="Sponsor Form" />

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
