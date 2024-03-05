import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { useTranslation } from "gatsby-plugin-react-i18next"
import DocumentationCategoryList from "../components/Documentation/DocumentationCategoryList"
import PageHeader from "../components/PageHeader"
import Header from "../components/Documentation/Header"

const DocumentationPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Header />

      <DocumentationCategoryList />
    </Layout>
  )
}

export default DocumentationPage

export const Head = () => <Seo title="Documentation" />

export const query = graphql`
  query ($language: String!) {
    localSearchDocs {
      index
      store
    }
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
