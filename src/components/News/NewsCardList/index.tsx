import React from "react";
import EventCard from "../../Events/EventCard";
import Pagination from "../Pagination";
import { Link } from "../../../components/Link";

interface Post {
  node: {
    excerpt: string;
    fields: {
      slug: string;
      postPath: string;
      generatedFeaturedImage: string;
    };
    frontmatter: {
      title: string;
      date: string;
      description: string;
      author: string;
      tags?: string[];
      featuredImage?: {
        childImageSharp: {
          gatsbyImageData: any;
        };
      };
    };
  };
}

interface NewsCardListProps {
  posts: Post[];
  previousPageNumber: number | null;
  previousPageLink: string | null;
  nextPage: string | null;
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

const NewsCardList = ({
  posts,
  previousPageNumber,
  previousPageLink,
  nextPage,
  currentPage,
  totalPages,
  baseUrl,
}: NewsCardListProps) => {
  // Create a balanced layout for all posts - divide them into groups for layout
  const allPosts = [...posts];
  const rowsNeeded = Math.ceil(allPosts.length / 3);
  let rowData: Post[][] = [];
  
  // Create rows with up to 3 cards each
  for (let i = 0; i < rowsNeeded; i++) {
    const startIndex = i * 3;
    const rowPosts = allPosts.slice(startIndex, startIndex + 3);
    rowData.push(rowPosts);
  }

  return (
    <div className="max-w-[1264px] mx-auto px-6 py-8 md:pt-12">
      {/* Display all posts in rows of up to 3 cards */}
      {rowData.map((row, rowIndex) => (
        <div 
          key={`row-${rowIndex}`} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center py-8 md:py-12"
        >
          {row.map((post, index) => (
            <EventCard 
              key={`post-${rowIndex}-${index}`} 
              post={post}
              isEclipseNews={post.node.frontmatter.author === 'Eclipse Foundation' || 
                (post.node.frontmatter.tags && post.node.frontmatter.tags.includes('eclipse-news'))} 
            />
          ))}
        </div>
      ))}
      <Pagination
        previousPageNumber={previousPageNumber}
        previousPageLink={previousPageLink}
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={baseUrl}
      />
      <div className="flex justify-center items-center gap-5 mt-8">
        <a 
          href="https://newsroom.eclipse.org/node/add/news" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-full transition-all duration-200 ease-in-out text-center font-medium">Submit News</a>
      </div>
    </div>
  );
};

export default NewsCardList;
