import React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import Buttons from "../components/LatestReleases/Buttons"
import { DownloadIcon } from "../components/Common/AppIcon"
import CtaWrapper from "../components/Common/CtaWrapper"
import LibericaMethod from "../components/Common/LibericaMethod"
import FAQ from "../components/FAQ"
import SelectorHeader from "../components/Common/SelectorHeader"
import { RedIcon } from "../components/Common/Icon"
import NightlyBulidParagraph from "../components/NightlyBuilds/NightlyBulidParagraph"
import TemurinBUilds from "../components/NightlyBuilds/TemurinBUilds"
import NightlyCtaWrapper from "../components/NightlyBuilds/NightlyCtaWrapper"
import TemurinBuilds from "../components/NightlyBuilds/TemurinBUilds"

const nightlyBuilds = () => {
  return (
    <div>
      <Layout>
        <NavBar />
        <PageHeader
          title={"Download Nightly"}
          subtitle={"Nightly Builds"}
          description={
            "Pick a version, package type, JDK/JRE, and download the binaries."
          }
        />
        <NightlyBulidParagraph />
        <TemurinBuilds />
        <NightlyCtaWrapper />
        <LibericaMethod />
        <FAQ className={"!py-16 md:!py-24"} />
      </Layout>
    </div>
  )
}

export default nightlyBuilds
