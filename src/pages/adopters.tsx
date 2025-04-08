import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import ContactUs from "../components/ContactUs"
import Logos, { LogoType } from "../components/Logos"
import BecomeAdopter from "../components/BecomeAdopter"

const Adopters = () => {
  return (
    <Layout>
      <PageHeader
        title="Eclipse Temurin™ Adopters"
        subtitle="Our Adopters"
        description="Companies that use Eclipse Temurin in production."
      />
      <Logos
        members={LogoType.ADOPTERS}
        title=""
        description=""
      />
      <BecomeAdopter />
      <ContactUs title="Speak to our team today" buttontitle="Contact Us" linkTo="/slack" />
      <ContactUs
        title="Connect with the community"
        buttontitle="Learn More"
        description="Join our Slack channel to discuss work and reach out to project maintainers."
        linkTo="/slack" 
      />
    </Layout>
  )
}
export default Adopters

export const Head = () => <Seo title="Our Adopters" />

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
