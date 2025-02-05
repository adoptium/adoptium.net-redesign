import * as React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHeader from "../../components/PageHeader"
import ReleaseNotesRender from "../../components/ReleaseNotesRender"

const ReleaseNotesPage = () => (
    <Layout>
      <PageHeader
        subtitle="Temurin"
        title={<Trans>Release Notes</Trans>}
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className="mx-auto max-w-[860px] px-2 w-full"
      />
      <ReleaseNotesRender />
    </Layout>
)

export default ReleaseNotesPage

export const Head = () => <Seo title="Release Notes" />

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
