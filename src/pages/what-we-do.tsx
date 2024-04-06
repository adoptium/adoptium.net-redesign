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
import Header from "../components/What-We-Do/Header"

const WhatWeDo = () => {
  return (
    <Layout>
      <Header />
      <PowerOfTemurin className={undefined} title="The power of Temurin™" />
      <LatestReleases />
      <WGProjects />
      <ContactUs
        title="Connect with the community"
        className={undefined}
        buttontitle="Learn More"
      />
      <Testimonials
        className={"!bg-transparent py-8 md:py-16 !border-transparent"}
      />
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
