import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import WayToSuppoter from "../components/Support/WayToSuppoter"
const SupportUs = () => {
  return (
    <div className="">
      <Layout>
        <Navbar />
        <PageHeader
          title="What we’re trying to achieve"
          subtitle="Support Us"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries  that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        />
        <WayToSuppoter />
      </Layout>
    </div>
  )
}

export default SupportUs
