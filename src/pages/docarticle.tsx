import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Doc-Article/Header"
import DocArticle from "../components/Doc-Article/DocArticle"
import DocumentationAuthors from "../components/Doc-Article/DocumentationAuthors"
import ContactUs from "../components/ContactUs"
import FAQ from "../components/FAQ"

const docarticle = () => {
  return (
    <Layout>
      <Header />
      <DocArticle />

      <DocumentationAuthors />
      <ContactUs
        title="Connect with the community"
        className={"pt-0 md:py-32"}
        buttontitle="Learn More"
      />
      <FAQ className={"!py-24 md:!py-40"} />
    </Layout>
  )
}

export default docarticle
