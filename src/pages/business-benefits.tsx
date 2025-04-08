import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import UsingTemurin from "../components/About/UsingTemurin"
import Testimonials from "../components/Testimonials"
import Logos, { LogoType } from "../components/Logos"
import ContactUs from "../components/ContactUs"

const BusinessBenefits = () => {
  return (
    <Layout>
      <PageHeader
        title="How Temurin can benefit your business"
        subtitle="Business Benefits"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
      />
      <ImageText
        title="More than 10 years' experience, and a focus firmly on your future"
        description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
        linkText="Learn More"
        link="#"
      />
      <UsingTemurin />
      <Logos
        members={LogoType.ADOPTERS}
        title="Eclipse Temurin&trade; Adopters"
        description="Companies that use Eclipse Temurin in production."
      />
      <Testimonials />
      <ImageText
        title="Need support with Temurin?"
        description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
        linkText="Get Support"
        link="/support"
      />
      <ContactUs
        title="Contact us about how Temurin can help your business"
        buttontitle="Contact Us"
        linkTo="/slack" 
      />
      <ContactUs
        title="Connect with the community"
        buttontitle="Learn More"
        description="Join our Slack channel to discuss work and reach out to project maintainers."
        linkTo="/slack" 
      />
    </Layout>
  )
}
export default BusinessBenefits

export const Head = () => <Seo title="Business Benefits" />

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
