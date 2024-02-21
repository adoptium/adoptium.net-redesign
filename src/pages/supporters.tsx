import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import ContactUs from "../components/ContactUs"
import Logos, { LogoType } from "../components/Logos"
import OurSupportTabContent from "../components/OurSupport/OurSupportTabContent"
import OurSponsors from "../components/OurSupport/OurSponsors"

const Supporters = () => {
  return (
    <Layout>
      <PageHeader
        title="Who we work with"
        subtitle="Our Supporters"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <OurSupportTabContent />
      <OurSponsors />

      <PowerOfTemurin />
      <ContactUs
        title="Speak to our team today"
        className={""}
        buttontitle="Contact Us"
      />
    </Layout>
  )
}
export default Supporters

export const Head = () => <Seo title="Our Supporters" />

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
