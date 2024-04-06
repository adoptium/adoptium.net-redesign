import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import PageTitle from "../components/Privacy-Policy/PageTitle"
import PolicyTerm from "../components/Privacy-Policy/PolicyTerm"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar />
      <PageTitle />
      <PolicyTerm />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
export const Head = () => <Seo title="Privacy Policy" />
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
