import * as React from "react"
import Layout from "../../components/Layout"
import NavBar from "../../components/NavBar"
import PageHeader from "../../components/PageHeader"
import FAQ from "../../components/FAQ"
import DownloadMethods from "../../components/Temurin/DownloadMethods"
import Tabs from "../../components/Temurin/Tabs"
import CommonCtaWrapper from "../../components/Common/CommonCtaWrapper"

import { loadLatestAssets } from '../../hooks'

const ReleasesPage = () => {
  return (
    <div>
      <Layout>
        <NavBar />
        <PageHeader
          title={"Download Temurin&reg JDK"}
          subtitle={"Latest Releases"}
          description={
            "Pick a version, package type, JDK/JRE, and download the binaries."
          }
        />
        <Tabs updaterAction={loadLatestAssets} Table={CommonCtaWrapper} />
        <DownloadMethods />
        <FAQ className={"!py-16 md:!py-24"} />
      </Layout>
    </div>
  )
}

export default ReleasesPage
