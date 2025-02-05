import React from "react"
import { graphql, Slice } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import NewsCardList from "../components/News/NewsCardList"
import AuthorData from "../json/authors.json"

const AuthorPage = ({ data, pageContext }) => {
  const author = AuthorData[pageContext.author]
  const posts = data.allMdx.edges

  const { previousPageNumber, nextPageNumber } = pageContext
  const previousPageLink =
    previousPageNumber === 1
      ? `/news/author/${pageContext.author}`
      : `/news/author/${previousPageNumber}`

  return (
    <Layout>
      <PageHeader
        subtitle="Author"
        title={author.name}
        description={<Slice alias="authorBio" />}
        className={"mx-auto max-w-[860px] px-2 w-full"}
      />
      <NewsCardList posts={posts} previousPageNumber={previousPageNumber} previousPageLink={previousPageLink} nextPage={nextPageNumber ? `/news/author/${pageContext.author}/page/${nextPageNumber}` : null} />
    </Layout>
  )
}

export default AuthorPage

export const Head = ({ pageContext }) => {
  const author = AuthorData[pageContext.author]
  const { currentPageNumber } = pageContext
  return (
    <Seo
      title={
        currentPageNumber === 1
          ? author.name
          : `${author.name} - Page ${currentPageNumber}`
      }
      description={author.summary}
    />
  )
}

export const authorPageQuery = graphql`
  query authorPageQuery(
    $author: String!
    $skip: Int!
    $limit: Int!
    $language: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { author: { eq: $author } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
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
