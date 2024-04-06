import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import BlogCard from "../components/NewAndUpdate/BlogCard"
import BlogCardList from "../components/NewAndUpdate/BlogCardList"
import LatestNews from "../components/LatestNews"
import ContactUs from "../components/ContactUs"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const events = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Events"
        title="Upcoming Events"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"mx-auto max-w-[860px] px-2 w-full"}
      />
      <BlogCard />
      <BlogCardList />
      <div className="md:pt-16">
        <ContactUs
          title="Connect with the community"
          className={""}
          buttontitle="Learn More"
        />
      </div>
    </Layout>
  )
}

export default events
export const Head = () => <Seo title="Events" />

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
