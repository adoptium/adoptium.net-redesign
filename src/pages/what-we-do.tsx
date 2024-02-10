import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import LatestReleases from "../components/Temurin/LatestReleases"
import WGProjects from "../components/WGProjects"
import ContactUs from "../components/ContactUs"
import Testimonials from "../components/Testimonials"
import LatestNews from "../components/LatestNews"

const WhatWeDo = () => {
  return (
    <Layout>
      <PageHeader
        title="About Eclipse Adoptium®"
        subtitle="What we do"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
      />
      <PowerOfTemurin />
      <LatestReleases />
      <WGProjects />
      <ContactUs title="Connect with the community" />
      <Testimonials className={undefined} />
      <LatestNews />
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
