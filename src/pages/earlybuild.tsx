import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import Documentation from "../components/Early-Access-Build/Documentation"
import AllReleases from "../components/Early-Access-Build/AllReleases"
import ApiInformation from "../components/Early-Access-Build/ApiInformation"

const earlybuild = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Early Access Builds"
          title="Early Access Builds"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"max-w-[860px] mx-auto"}
        />

        <AllReleases />
        <ApiInformation />

        <Documentation />
      </Layout>
    </>
  )
}

export default earlybuild
