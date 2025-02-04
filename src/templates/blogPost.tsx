import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import { MDXProvider } from "@mdx-js/react"

import { RedIcon } from "../components/Common/Icon"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AuthorData from "../json/authors.json"
import GuestPost from "../components/GuestPost"
import Byline from "../components/News/Byline"
import RelatedArticles from "../components/News/RelatedArticles"
import ShareButton from "../components/Share"
import Tags from "../components/Tags"
import Comments from "../components/Comments"
import ImagePopup from "../components/ImagePopup"
import SharePost from "../components/News/SharePost"

export const formatDiv = props => {
  // convert inline code to code blocks
  if (props.dangerouslySetInnerHTML.__html.includes('class="language-text"')) {
    return <code {...props} />
  } else {
    return <div {...props} />
  }
}

const components = {
  GuestPost,
  img: props => <ImagePopup {...props} />,
  div: formatDiv,
}

const BlogPostTemplate = ({ data, pageContext, location, children }) => {
  const post = data.mdx
  const { previous, next } = pageContext
  const author = AuthorData[post.frontmatter.author]
  const tags = post.frontmatter.tags

  return (
    <Layout>
      <div className="pt-48 pb-12">
        <div className="mx-auto max-w-[832px] w-full px-6 lg:px-0 flex flex-col items-center justify-center">
          <div className="self-stretch h-52 flex-col justify-center items-center gap-6 flex">
            <div className="self-stretch h-32 flex-col justify-center items-center gap-4 flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <RedIcon />
                <div className="text-rose-600 text-base font-bold leading-normal">
                  News article
                </div>
              </div>
              <h1 className="self-stretch text-center text-white   text-[36px] lg:text-[48px] leading-[122.222%] lg:leading-[116.667%] font-semibold">
                {post.frontmatter.title}
              </h1>
            </div>
            <div className="self-stretch text-center text-grey text-grey-300 text-xl font-normal leading-7">
              {post.excerpt}
            </div>
            <Byline
              date={post.frontmatter.date}
              author={author.name}
              identifier={post.frontmatter.author}
            />
          </div>
        </div>
      </div>
      <section className="mx-auto w-full p-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="max-w-4xl">
          <article>
            <header className="pb-5">
              <ShareButton
                location={location}
                siteMetadata={data.site.siteMetadata}
                post={post.frontmatter}
              />
            </header>
            <article className="prose prose-invert lg:prose-lg max-w-none">
              <MDXProvider components={components}>{children}</MDXProvider>
            </article>
            {/* <Tags tags={tags} />
            <Comments /> */}
            <SharePost />
          </article>

          <div>
            <ul className="flex flex-wrap justify-between list-none p-0">
              <li>
                {next && (
                  <Link to={next.fields.postPath} rel="next">
                    ← {next.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {previous && (
                  <Link to={previous.fields.postPath} rel="prev">
                    {previous.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <RelatedArticles />
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => {
  const post = data.mdx
  let twitterCard = ""

  if (post.frontmatter && post.frontmatter.featuredImage) {
    twitterCard =
      post.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images
        .fallback.src
  }
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      twitterCard={twitterCard}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
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
