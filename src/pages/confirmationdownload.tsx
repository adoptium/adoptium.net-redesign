import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Confirmation-Download/Header"
import WhatNow from "../components/Confirmation-Download/WhatNow"
import AdoptiumWorking from "../components/Confirmation-Download/AdoptiumWorking"
import ContactUs from "../components/ContactUs"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const confirmationdownload = () => {
  return (
    <Layout>
      <Header />
      <WhatNow />
      <div className=" bg-[#3E3355] my-8 w-full h-[1px]"></div>
      <AdoptiumWorking />
      <ContactUs
        title="Connect with the community"
        className={"pt-0 md:py-32"}
        buttontitle="Learn More"
      />
    </Layout>
  )
}

export default confirmationdownload
export const Head = () => <Seo title="Confirmation Download" />
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
