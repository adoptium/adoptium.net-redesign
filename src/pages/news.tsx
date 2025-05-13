import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import NewsCardList from "../components/News/NewsCardList"

const NewsIndex = ({ data }) => {
  const posts = data.allMdx.edges
  const totalCount = data.allMdx.totalCount
  const postsPerPage = 6
  const totalPages = Math.ceil(totalCount / postsPerPage)
  const currentPage = 1

  // For page 1, there is no previous page.
  const previousPageNumber = null
  const previousPageLink = null

  // If there are more pages, calculate the next page's link.
  const nextPageNumber = currentPage < totalPages ? currentPage + 1 : null
  const nextPage = nextPageNumber ? `/news/page/${nextPageNumber}` : null

  const baseUrl = "/news" // This is used by your pagination component to build numbered links

  return (
    <Layout>
      <PageHeader
        subtitle="News"
        title="News & Updates"
        description="Follow the latest updates from the Eclipse Adoptium Project"
        className="mx-auto max-w-[860px] px-2 w-full"
      />
      <NewsCardList 
        posts={posts}
        previousPageNumber={previousPageNumber}
        previousPageLink={previousPageLink}
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={baseUrl}
      />
    </Layout>
  )
}

export default NewsIndex

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
