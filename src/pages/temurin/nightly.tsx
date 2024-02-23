import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHeader from "../../components/PageHeader"
import NightlyBulidParagraph from "../../components/NightlyBuilds/NightlyBulidParagraph"
import TemurinBuilds from "../../components/NightlyBuilds/TemurinBUilds"
import CommonCtaWrapper from "../../components/Common/CommonCtaWrapper"
import LibericaMethod from "../../components/Common/LibericaMethod"
import FAQ from "../../components/FAQ"

const TemurinReleases = () => (
  <Layout>
    <PageHeader
      title={"Download Nightly"}
      subtitle={"Nightly Builds"}
      description={
        "Pick a version, package type, JDK/JRE, and download the binaries."
      }
      className={"max-w-[860px] mx-auto"}
    />
    <NightlyBulidParagraph />
    <TemurinBuilds headingTitle={"Temurin Builds on 01/04/23"} />
    <CommonCtaWrapper />
    <LibericaMethod />
    <FAQ className={"!py-16 md:!py-24"} />
  </Layout>
)

export default TemurinReleases

export const Head = () => <Seo title="Nightly Builds" />

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
