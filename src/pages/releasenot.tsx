import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import { ReleaseNot } from "../components/Relaease-Not/ReleaseNot"
import PreviousReleaseNotes from "../components/Relaease-Not/PreviousReleaseNotes"
import LatestReleases from "../components/Temurin/LatestReleases"
import LatestRelease from "../components/Relaease-Not/LatestRelease"

const releasenot = () => {
  return (
    <div>
      <Layout>
        <PageHeader
          subtitle="Release Notes"
          title="Product Release Notes"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"max-w-[860px] mx-auto"}
        />
        <ReleaseNot />
        <PreviousReleaseNotes />
        <LatestRelease />
      </Layout>
    </div>
  )
}

export default releasenot
