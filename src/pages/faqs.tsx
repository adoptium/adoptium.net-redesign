import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import FaqsBlock from "../components/Faqs/FaqsBlock"
import Documentation from "../components/Early-Access-Build/Documentation"
import ContactUs from "../components/ContactUs"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const faqs = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="FAQs"
          title="Frequently asked questions"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <FaqsBlock />
        <div className="pt-0 pb-10">
          <Documentation />
        </div>
        <ContactUs
          title={"Connect with the community"}
          className={"md:py-28 py-10"}
          buttontitle="Learn More"
        />
      </Layout>
    </>
  )
}

export default faqs
export const Head = () => <Seo title="FAQS" />

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
