import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import { ReleaseNot } from "../components/Relaease-Not/ReleaseNot"

const releasenot = () => {
  return (
    <div>
      <Layout>
        <PageHeader
          subtitle="Business Benefits"
          title="Product Release Notes"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        />
        <ReleaseNot />
      </Layout>
    </div>
  )
}

export default releasenot
