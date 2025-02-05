import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import NewsCardList from "../components/News/NewsCardList"

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges
  const nextPageNumber = data.allMdx.totalCount > 10 ? 2 : null

  return (
    <Layout>
      <PageHeader
        subtitle="News"
        title="News & Updates"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        className={"mx-auto max-w-[860px] px-2 w-full"}
      />
      <NewsCardList posts={posts} previousPageNumber={null} previousPageLink={null} nextPage={nextPageNumber ? `/news/page/${nextPageNumber}` : null} />
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="News & Events" />

export const pageQuery = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 10) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            postPath
            generatedFeaturedImage
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
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
