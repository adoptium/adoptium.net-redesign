import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Doc-Article/Header"
import DocArticle from "../components/Doc-Article/DocArticle"
import DocumentationAuthors from "../components/Doc-Article/DocumentationAuthors"
import ContactUs from "../components/ContactUs"
import FAQ from "../components/FAQ"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

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

export const Head = () => <Seo title="Doc Article" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mostRecentLts {
      version
    }
  }
`
