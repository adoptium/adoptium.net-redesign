import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import ContactUs from "../components/ContactUs"
import WaysSupport from "../components/Support/WaysSupport"
import MediaAndPromotion from "../components/Support/Media&Promotion"
const SupportUs = () => {
  return (
    <div className="">
      <Layout>
        <Navbar />
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
    </div>
  )
}

export default SupportUs
