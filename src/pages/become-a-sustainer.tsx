import * as React from "react"
import HubspotForm from "react-hubspot-form"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"

const BecomeASustainer = () => (
  <Layout>
    <PageHeader
      subtitle="Sustainer"
      title="Become a Sustainer"
      description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
    />
    <section className="mx-auto max-w-4xl w-full p-6 lg:px-0 items-center justify-center">
      <HubspotForm
        portalId="5413615"
        formId="6e3e994e-5bc8-4a6e-91b3-d3f331b69402"
      />
    </section>
  </Layout>
)

export default BecomeASustainer

export const Head = () => <Seo title="Become a Sustainer" />

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
