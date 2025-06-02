import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import NewsCardList from "../components/News/NewsCardList";
import SkeletonLoader from "../components/News/SkeletonLoader";
import { fetchLatestNews, NewsItem } from "../hooks/fetchNews";

const NewsPage = ({ data, pageContext }) => {
  const blogPosts = data.allMdx.edges;
  const {
    previousPageNumber,
    nextPageNumber,
    currentPage,
    totalPages,
    baseUrl,
  } = pageContext;
  
  const [eclipseNews, setEclipseNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [combinedPosts, setCombinedPosts] = useState(blogPosts);

  const previousPageLink =
    previousPageNumber === 1 ? "/news" : `/news/page/${previousPageNumber}`;
  const nextPage = nextPageNumber ? `/news/page/${nextPageNumber}` : null;
    
  useEffect(() => {
    const getEclipseNews = async () => {
      try {
        setLoading(true);
        
        // Calculate which page of the Eclipse news API we need to fetch
        // Assuming we want 3 Eclipse news items per page, and the API returns 20 items per page
        const itemsPerPage = 3; // Number of Eclipse news items to show per page
        const apiItemsPerPage = 20; // Number of items the Eclipse API returns per page
        const apiPageNumber = Math.ceil((currentPage * itemsPerPage) / apiItemsPerPage);
        
        // Calculate the start and end indices for slicing the API results
        // For each page, we want to show 3 Eclipse news items alongside the blog posts
        const startIndex = ((currentPage - 1) * itemsPerPage) % apiItemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, apiItemsPerPage);
        
        // Fetch the appropriate page of Eclipse news
        const newsResponse = await fetchLatestNews(apiPageNumber);
        
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
        
        // Take only the slice we need for the current page
        const newsSlice = filteredNews.slice(startIndex, endIndex);
        
        setEclipseNews(newsSlice);
        
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
        })) || [];
        
        // Always include some Eclipse news - use a ratio of blog posts to Eclipse news
        // Aim for approximately 4 blog posts and 2 Eclipse news items per page
        // But ensure we always show Eclipse news even if it means showing fewer blog posts
        
        let combined;
        if (transformedEclipseNews.length > 0) {
          // Keep all original blog posts rather than limiting them
          const originalBlogPosts = blogPosts;
          
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
          combined = blogPosts;
        }
        
        setCombinedPosts(combined);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Eclipse news:", error);
        setCombinedPosts(blogPosts);
        setLoading(false);
      }
    };
    
    getEclipseNews();
  }, [currentPage, blogPosts]);
  
  return (
    <Layout>
      <PageHeader
        subtitle="News"
        title="News & Updates"
        description="Follow the latest updates from the Eclipse Adoptium Project"
        className="mx-auto max-w-[860px] px-2 w-full"
      />
      {loading ? (
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
