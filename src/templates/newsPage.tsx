import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import NewsCardList from "../components/News/NewsCardList";

const NewsPage = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;
  const {
    previousPageNumber,
    nextPageNumber,
    currentPage,
    totalPages,
    baseUrl,
  } = pageContext;

  const previousPageLink =
    previousPageNumber === 1 ? "/news" : `/news/page/${previousPageNumber}`;
  const nextPage = nextPageNumber ? `/news/page/${nextPageNumber}` : null;

  return (
    <Layout>
      <PageHeader
        subtitle="News"
        title="News & Updates"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
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
  );
};

export default NewsPage;

export const Head = ({ pageContext }) => {
  const { currentPage } = pageContext;
  return <Seo title={`News & Events – Page ${currentPage}`} />;
};

export const newsPageQuery = graphql`
  query newsPageQuery($skip: Int!, $limit: Int!, $language: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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
            author
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
`;
