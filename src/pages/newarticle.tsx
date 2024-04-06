import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Header from "../components/New-Article/Header"
import Introduction from "../components/New-Article/Introduction"
import RelatedArticle from "../components/New-Article/RelatedArticle"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const newarticle = () => {
  return (
    <>
      <Layout>
        <Header />
        <Introduction />
        <RelatedArticle />
      </Layout>
    </>
  )
}

export default newarticle
export const Head = () => <Seo title="News Article" />

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
