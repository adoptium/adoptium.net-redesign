import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Header from "../components/New-Article/Header"
import Introduction from "../components/New-Article/Introduction"
import RelatedArticle from "../components/New-Article/RelatedArticle"

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
