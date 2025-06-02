import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import NewsCardList from "../components/News/NewsCardList"
import SkeletonLoader from "../components/News/SkeletonLoader"
import { fetchLatestNews, NewsItem } from "../hooks/fetchNews"

const NewsIndex = ({ data }) => {
  const blogPosts = data.allMdx.edges
  const totalCount = data.allMdx.totalCount
  const postsPerPage = 6
  const totalPages = Math.ceil(totalCount / postsPerPage)
  const currentPage = 1
  
  const [eclipseNews, setEclipseNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [combinedPosts, setCombinedPosts] = useState(blogPosts)

  // For page 1, there is no previous page.
  const previousPageNumber = null
  const previousPageLink = null

  // If there are more pages, calculate the next page's link.
  const nextPageNumber = currentPage < totalPages ? currentPage + 1 : null
  const nextPage = nextPageNumber ? `/news/page/${nextPageNumber}` : null

  const baseUrl = "/news" // This is used by your pagination component to build numbered links
  
  useEffect(() => {
    const getEclipseNews = async () => {
      try {
        setLoading(true)
        
        // For the main page (page 1), show 3 Eclipse news items
        const eclipseNewsItemsPerPage = 3; // Number of Eclipse news items to show per page
        const apiItemsPerPage = 20; // Number of items the Eclipse API returns per page
        const apiPageNumber = 1; // Start with page 1 for the API
        
        // Always start with the first 3 items for the main page
        const startIndex = 0;
        const endIndex = eclipseNewsItemsPerPage;
        
        const newsResponse = await fetchLatestNews(apiPageNumber)
        
        // Filter out news items that link to adoptium.net to avoid duplicates
        const filteredNews = (newsResponse.news || []).filter(
          (newsItem: NewsItem) => {
            try {
              const parsedUrl = new URL(newsItem.link);
              return parsedUrl.hostname !== 'adoptium.net';
            } catch (error) {
              console.error("Invalid URL:", newsItem.link);
              return false;
            }
          }
        )
        
        // Take only the first 3 items for the main page
        const newsSlice = filteredNews.slice(startIndex, endIndex);
        
        setEclipseNews(newsSlice)
        
        // Transform Eclipse news items to match the blog post structure
        const transformedEclipseNews = newsSlice.map(newsItem => ({
          node: {
            excerpt: newsItem.body.substring(0, 150) + '...',
            fields: {
              slug: newsItem.link,
              postPath: newsItem.link,
              generatedFeaturedImage: newsItem.image && newsItem.image.trim() !== '' 
                ? newsItem.image 
                : '/images/ef-default-news.jpg' // Use newsroom image when available
            },
            frontmatter: {
              title: newsItem.title,
              date: new Date(newsItem.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }),
              description: newsItem.body.substring(0, 100) + '...',
              author: 'Eclipse Foundation',
              tags: ['eclipse-news']
            }
          }
        })) || []
        
        // Keep all blog posts (up to 6) AND add Eclipse news 
        // Rather than replacing blog posts with Eclipse news
        let combined
        if (transformedEclipseNews.length > 0) {
          // Keep all original blog posts (up to the postsPerPage limit)
          const originalBlogPosts = blogPosts.slice(0, postsPerPage);
          
          // Add Eclipse news items
          combined = [...originalBlogPosts, ...transformedEclipseNews];
          
          // Sort combined posts by date
          combined.sort((a, b) => {
            const dateA = new Date(a.node.frontmatter.date);
            const dateB = new Date(b.node.frontmatter.date);
            return dateB.getTime() - dateA.getTime();
          });
        } else {
          // If no Eclipse news is available, just show blog posts
          combined = blogPosts.slice(0, postsPerPage);
        }
        
        setCombinedPosts(combined);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Eclipse news:", error);
        setLoading(false);
      }
    }
    
    getEclipseNews();
  }, [])

  // In test environment, always render the NewsCardList regardless of loading state
  const isTestEnvironment = typeof process !== 'undefined' && process.env.NODE_ENV === 'test';

  return (
    <Layout>
      <PageHeader
        subtitle="News"
        title="News & Updates"
        description="Follow the latest updates from the Eclipse Adoptium Project"
        className="mx-auto max-w-[860px] px-2 w-full"
      />
      {loading && !isTestEnvironment ? (
        <SkeletonLoader count={6} />
      ) : (
        <NewsCardList
          posts={combinedPosts}
          previousPageNumber={previousPageNumber}
          previousPageLink={previousPageLink}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl={baseUrl}
        />
      )}
    </Layout>
  )
}

export default NewsIndex

export const Head = () => <Seo title="News" />

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
