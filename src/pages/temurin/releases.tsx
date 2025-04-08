import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import NavBar from "../../components/NavBar"
import PageHeader from "../../components/PageHeader"
import FAQ from "../../components/FAQ"
import ChecksumModal from "../../components/ChecksumModal"
import DownloadMethods from "../../components/Temurin/DownloadMethods"
import Tabs from "../../components/Temurin/Tabs"
import CommonCtaWrapper from "../../components/Common/CommonCtaWrapper"

import { loadLatestAssets } from "../../hooks"

const ReleasesPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentChecksum, setCurrentChecksum] = useState("")

  const openModalWithChecksum = checksum => {
    setCurrentChecksum(checksum)
    setModalOpen(true)
  }

  return (
    <Layout>
      <PageHeader
        title={"Download Temurin&reg JDK"}
        subtitle={"Latest Releases"}
        description={
          "Pick a version, package type, JDK/JRE, and download the binaries."
        }
      />
      <Tabs
        updaterAction={loadLatestAssets}
        Table={CommonCtaWrapper}
        openModalWithChecksum={openModalWithChecksum}
      />
      <DownloadMethods />
      {/* <FAQ className={"!py-16 md:!py-24"} /> */}
      <ChecksumModal
        open={modalOpen}
        setOpen={setModalOpen}
        checksum={currentChecksum}
      />
    </Layout>
  )
}

export default ReleasesPage

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
