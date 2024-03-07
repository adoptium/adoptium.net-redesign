import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Introduction from "../components/Supports/Introduction"
import SupportedPlatform from "../components/Supports/SupportedPlatform"
import ReleaseRoadMap from "../components/Eclipse-Temurin/ReleaseRoadMap"
import ContactUs from "../components/ContactUs"
import Documentation from "../components/Early-Access-Build/Documentation"

const supports = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Support"
          title="Support"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <Introduction />
        <div className="h-[1px] mt-6 mb-10 w-full bg-[#3E3355]"></div>
        <SupportedPlatform />
        <ReleaseRoadMap />
        <ContactUs
          title={"Connect with the community"}
          className={"md:py-28 py-12"}
          buttontitle="Learn More"
        />
        <div className="py-10">
          <Documentation />
        </div>
      </Layout>
    </>
  )
}

export default supports
