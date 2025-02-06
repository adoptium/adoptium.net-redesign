import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import NewsCardList from "../components/News/NewsCardList"
import { capitalize } from "../util/capitalize"

const Tags = ({ pageContext, data }) => {
  const tags = data.allMdx.edges

  const { previousPageNumber, nextPageNumber } = pageContext
  const previousPageLink =
    previousPageNumber === 1
      ? `/news/author/${pageContext.author}`
      : `/news/author/${previousPageNumber}`

  return (
    <Layout>
      <PageHeader
        subtitle="News articles"
        title={capitalize(pageContext.tag)}
        description={`Posts tagged with ${pageContext.tag}`}
        className={"mx-auto max-w-[860px] px-2 w-full"}
      />
      <NewsCardList posts={tags} previousPageNumber={previousPageNumber} previousPageLink={previousPageLink} nextPage={nextPageNumber ? `/news/tags/${pageContext.tag}/page/${nextPageNumber}` : null} />
    </Layout>
  )
}

export default Tags

export const Head = ({ pageContext }) => {
  return <Seo title={pageContext.tag} description={pageContext.tag} />
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
