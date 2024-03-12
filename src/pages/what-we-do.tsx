import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import LatestReleases from "../components/Temurin/LatestReleases"
import WGProjects from "../components/WGProjects"
import ContactUs from "../components/ContactUs"
import Testimonials from "../components/Testimonials"
import LatestNews from "../components/LatestNews"
import PageHeader from "../components/PageHeader"

const WhatWeDo = () => {
  return (
    <Layout>
      <PageHeader
        title="About Eclipse Adoptium®"
        subtitle="Who we are"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"max-w-[860px] mx-auto"}
      />
      <PowerOfTemurin className={undefined} title="The power of Temurin™" />
      <LatestReleases />
      <WGProjects />
      <ContactUs
        title="Connect with the community"
        className={undefined}
        buttontitle="Learn More"
      />
      <Testimonials className={undefined} />
      <LatestNews className={undefined} title={"Latest news and updates"} />
    </Layout>
  )
}
export default WhatWeDo

export const Head = () => <Seo title="What We Do" />

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
  }
`
