import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import UsingTemurin from "../components/About/UsingTemurin"
import Testimonials from "../components/Testimonials"

import ContactUs from "../components/ContactUs"
import PageDivider from "../components/Business-Benefits2/PageDivider"
import OurTabContent from "../components/Business-Benefits2/OurTabContent"
import { NeedSupportIcon } from "../components/Common/Icon"
import NavBar from "../components/NavBar"

const BusinessBenefits = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <PageHeader
          title="How Temurin can benefit your business"
          subtitle="Business Benefits"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        />
        <ImageText
          className={"mt-0 lg:mt-16"}
          title="More than 10 years' experience, and a focus firmly on your future"
          description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
          linkText="Who we are"
          link="#"
          icon={undefined}
        />
        <PageDivider />
        <UsingTemurin />
        <OurTabContent />
        <Testimonials className={"!bg-transparent !border-none"} />
        <ImageText
          className={
            "flex flex-col md:flex-row  w-full items-center text-center md:text-start mb-8"
          }
          title="Need support with Temurin?"
          description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
          linkText="Get Support"
          link="#"
          icon={<NeedSupportIcon />}
        />
        <ContactUs
          title="Contact us about how Temurin can help your business"
          className={""}
          buttontitle="Contact"
        />
      </Layout>
    </>
  )
}
export default BusinessBenefits

export const Head = () => <Seo title="Business Benefits" />

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
