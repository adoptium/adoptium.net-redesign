import React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import LibericaMethod from "../components/Common/LibericaMethod"
import FAQ from "../components/FAQ"
import NightlyBulidParagraph from "../components/NightlyBuilds/NightlyBulidParagraph"

import TemurinBuilds from "../components/NightlyBuilds/TemurinBUilds"
import CtaWrapper from "../components/NightlyBuilds/CtaWrapper"

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
          className={"max-w-[860px] mx-auto"}
        />
        <NightlyBulidParagraph />
        <TemurinBuilds title={"Temurin Builds on 01/04/23"} />
        <CtaWrapper />
        <LibericaMethod />
        <FAQ className={"!py-16 md:!py-24"} />
      </Layout>
    </div>
  )
}

export default nightlyBuilds
