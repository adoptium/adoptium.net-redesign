import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import WaysSupport from "../components/Support-us/WaysSupport"
import MediaAndPromotion from "../components/Support-us/Media&Promotion"
import ContactUs from "../components/ContactUs"

const supportUs = () => {
  return (
    <>
      <Layout>
        <PageHeader
          title="What we’re trying to achieve"
          subtitle="Support Us"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"max-w-[860px] mx-auto"}
        />
        <WaysSupport />
        <MediaAndPromotion />
        <ContactUs
          title={"Connect with the community"}
          className={undefined}
          buttontitle="Learn More"
        />
      </Layout>
    </>
  )
}

export default supportUs
