import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import NewsCardList from "../components/News/NewsCardList"
import { capitalize } from "../util/capitalize"

const Tags = ({ pageContext, data }) => {
  const posts = data.allMdx.edges
  const { tag, previousPageNumber, nextPageNumber, currentPageNumber, numTagPages } = pageContext

  // Build previousPageLink: if previous is page 1, use the base URL; otherwise include /page/<number>
  const previousPageLink =
    previousPageNumber === 1
      ? `/news/tags/${tag}`
      : `/news/tags/${tag}/page/${previousPageNumber}`

  // Build next page link if a next page exists.
  const nextPageLink = nextPageNumber ? `/news/tags/${tag}/page/${nextPageNumber}` : null

  // Base URL used for numbered pagination links.
  const baseUrl = `/news/tags/${tag}`

  return (
    <Layout>
      <PageHeader
        subtitle="News articles"
        title={capitalize(tag)}
        description={`Posts tagged with ${tag}`}
        className="mx-auto max-w-[860px] px-2 w-full"
      />
      <NewsCardList
        posts={posts}
        previousPageNumber={previousPageNumber}
        previousPageLink={previousPageLink}
        nextPage={nextPageLink}
        currentPage={currentPageNumber}
        totalPages={numTagPages}
        baseUrl={baseUrl}
      />
    </Layout>
  )
}

export default Tags

export const Head = ({ pageContext }) => {
  const { currentPageNumber, tag } = pageContext
    return (
      <Seo
        title={
          currentPageNumber === 1
            ? tag
            : `${tag} - Page ${currentPageNumber}`
        }
        description={tag}
      />
    )
}

export const tagsPageQuery = graphql`
  query tagsPageQuery($tag: String!, $language: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            postPath
            generatedFeaturedImage
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
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
