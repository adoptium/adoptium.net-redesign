import * as React from "react"
import HubspotForm from "react-hubspot-form"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"

const JoinPage = () => (
  <Layout>
    <PageHeader
      subtitle="Join the Eclipse Adoptium&reg; Working Group"
      title="Joining the Working Group"
      description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
    />
    <section className="joinForm mx-auto max-w-4xl w-full p-6 lg:px-0 items-center justify-center">
      <HubspotForm
        portalId="5413615"
        formId="78aa6887-715f-420c-97be-b97860899cec"
      />
    </section>
  </Layout>
)

export default JoinPage

export const Head = () => <Seo title="Join" />

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
