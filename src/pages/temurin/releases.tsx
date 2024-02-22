import * as React from "react"
import { graphql } from "gatsby"
import PageHeader from "../../components/PageHeader"
import CommonCtaWrapper from "../../components/Common/CommonCtaWrapper"
import LibericaMethod from "../../components/Common/LibericaMethod"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ReleaseVersionTab from "../../components/LatestReleases/ReleaseVersionTab"
import FAQ from "../../components/FAQ"

const TemurinReleases = () => (
  <Layout>
    <PageHeader
      title={"Download Liberica JDK"}
      subtitle={"Latest Relseases"}
      description={
        "Pick a version, package type, JDK/JRE, and download the binaries."
      }
      className={"mx-auto max-w-[1048px] w-full"}
    />
    <ReleaseVersionTab />
    <CommonCtaWrapper />
    <LibericaMethod />
    <FAQ className={"!py-16 md:!py-24"} />
  </Layout>
)

export default TemurinReleases

export const Head = () => <Seo title="Latest Releases" />

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
