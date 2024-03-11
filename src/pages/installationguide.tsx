import React from "react"
import ContactUs from "../components/ContactUs"
import DocumentationAuthors from "../components/Doc-Article/DocumentationAuthors"
import FAQ from "../components/FAQ"
import InstallationArticle from "../components/Installation-Guide/InstallationArticle"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"

const installationguide = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Business Benefits"
        title="How Temerin can benefit your business"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"mx-auto max-w-[860px] px-2 w-full"}
      />
      <InstallationArticle />
      <div className=" md:pb-16">
        <DocumentationAuthors />
      </div>
      <ContactUs
        title="Connect with the community"
        className={"pt-0 md:py-32"}
        buttontitle="Learn More"
      />
      <FAQ className={"!py-16 md:!py-40"} />
    </Layout>
  )
}

export default installationguide
