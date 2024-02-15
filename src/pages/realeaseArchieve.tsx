import React, { useState } from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import LibericaMethod from "../components/Common/LibericaMethod"
import FAQ from "../components/FAQ"
import CtaWrapper from "../components/NightlyBuilds/CtaWrapper"
import TemurinBuilds from "../components/NightlyBuilds/TemurinBUilds"
import TabsSelector from "../components/ReleasesArchieve.tsx/TabsSelector"

const realeaseArchieve = () => {
  return (
    <Layout>
      <NavBar />
      <PageHeader
        title={"Download Liberica JDK"}
        subtitle={"Latest Relseases"}
        description={
          "Pick a version, package type, JDK/JRE, and download the binaries."
        }
      />
      <TabsSelector />
      <TemurinBuilds title={"Liberica JDK 20.0.2+10"} />
      <CtaWrapper />
      <LibericaMethod />
      <FAQ className={"!py-16 md:!py-24"} />
    </Layout>
  )
}

export default realeaseArchieve
