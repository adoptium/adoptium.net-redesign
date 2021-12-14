import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import EditLink from '../components/EditLink';
import AuthorsList from '../containers/AuthorList';
import InstallTabs from '../components/InstallTabs';
import Seo from "../components/Seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <Seo title={frontmatter.title} />
    <section className="py-5 container">
    <div className="markdown-container container-md">
      <div className="markdown">
        <h1 className="pb-4">{frontmatter.title}</h1>
        {frontmatter.path === "/installation" && (
          <section className="adopt-demo-container my-5">
            <div className="adopt-demo mx-auto">
              <InstallTabs />
            </div>
          </section>
        )}
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    <AuthorsList authors={frontmatter.authors.split(',')} />
    <EditLink relativePath={frontmatter.path} />
    </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        authors
      }
    }
  }
`