import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/Working-Form/ContactForm"

const sponsorform = () => {
  return (
    <Layout>
      <PageHeader
        title="Become a sponsor"
        subtitle="Become a sponsor"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <ContactForm />
    </Layout>
  )
}

export default sponsorform
