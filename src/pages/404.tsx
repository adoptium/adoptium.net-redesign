import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Error404 from "../components/Error-404/Error404"

const NotFoundPage = () => (
  <Layout>
    <Error404 />
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Not found" />

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
