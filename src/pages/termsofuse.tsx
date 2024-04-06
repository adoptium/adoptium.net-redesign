import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import PolicyTerm from "../components/Privacy-Policy/PolicyTerm"
import PageTitle from "../components/Terms-of-use/PageTitle"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
const termsofuse = () => {
  return (
    <>
      <NavBar />
      <PageTitle />
      <PolicyTerm />
      <Footer />
    </>
  )
}

export default termsofuse
export const Head = () => <Seo title="Terms of Use" />
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
