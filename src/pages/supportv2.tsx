import React from "react"
import ContactUs from "../components/ContactUs"
import Documentation from "../components/Early-Access-Build/Documentation"
import ReleaseRoadMap from "../components/Eclipse-Temurin/ReleaseRoadMap"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ComminitySupport from "../components/Support-v2/ComminitySupport"

const supportv2 = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Support"
          title="Support"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <ComminitySupport />

        <ReleaseRoadMap />
        <ContactUs
          title={"Connect with the community"}
          className={"md:py-28 py-12"}
          buttontitle="Learn More"
        />
        <div className="py-10 md:py-20">
          <Documentation />
        </div>
      </Layout>
    </>
  )
}

export default supportv2
