import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/Contact-Us/ContactForm"

const contactform = () => {
  return (
    <Layout>
      <PageHeader
        title="Get in touch"
        subtitle="Contact"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <ContactForm />
    </Layout>
  )
}

export default contactform
