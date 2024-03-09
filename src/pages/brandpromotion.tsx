import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import BrandGuidline from "../components/Brand-Promotion/BrandGuidline"
import TemriunDownloandButtons from "../components/Brand-Promotion/TemriunDownloandButtons"
import WayToSupport from "../components/Brand-Promotion/WayToSupport"
import ContactUs from "../components/ContactUs"

const brandpromotion = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Brand & Promotion"
          title="Brand and Promotion"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <BrandGuidline />
        <TemriunDownloandButtons />
        <WayToSupport />
        <ContactUs
          title={"Connect with the community"}
          className={"md:py-28 py-6"}
          buttontitle="Learn More"
        />
      </Layout>
    </>
  )
}

export default brandpromotion
