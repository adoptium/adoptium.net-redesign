import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/Contact-Us/ContactForm"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const contactform = () => {
  return (
    <Layout>
      <PageHeader
        title="Get in touch"
        subtitle="Contact"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <ContactForm />
    </Layout>
  )
}

export default contactform
export const Head = () => <Seo title="Contact Us" />

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
