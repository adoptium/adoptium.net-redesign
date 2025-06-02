import React from "react"
import { Link } from "../../Link"

interface EventCardProps {
    post: any;
    isEclipseNews?: boolean;
}

const EventCard = ({ post, isEclipseNews }: EventCardProps) => {
    // Check if this is an external link (Eclipse Foundation news)
    const isExternalLink = isEclipseNews || 
                           post.node.frontmatter.tags?.includes('eclipse-news') || 
                           (post.node.fields.postPath && post.node.fields.postPath.startsWith('http'));
    
    // Function to truncate text if it exceeds maxLength
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };
    
    // Handle potentially missing data
    const title = post.node.frontmatter.title || 'Untitled';
    const excerpt = post.node.excerpt || post.node.frontmatter.description || '';
    const date = post.node.frontmatter.date || '';
    
    return (
        <div className="flex flex-col max-w-[385px] w-full sm:w-[385px] h-[600px] rounded-3xl newscard-2 bg-[#200D46]">
            {post.node.frontmatter.featuredImage ? (
                <img 
                    className="m-0.5 rounded-t-3xl h-[200px] object-cover w-full" 
                    src={post.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images.fallback.src} 
                    alt="blog banner image" 
                />
            ) : (
                <img 
                    className="m-0.5 rounded-t-3xl h-[200px] object-cover w-full" 
                    src={post.node.fields.generatedFeaturedImage} 
                    alt="blog banner image" 
                />
            )}

            <div className="p-8 flex flex-col h-[400px]">
                <h3 
                    className="text-[24px] font-semibold leading-normal h-auto line-clamp-3 mb-2" 
                    title={title}
                >
                    {truncateText(title, 90)}
                </h3>
                
                <div className="flex justify-between py-3">
                    <h3 className="flex flex-col gap-1 tab-button-text text-white">
                        <span>{date}</span>
                        {post.node.frontmatter.tags?.includes('eclipse-news') && 
                            <span className="text-sm text-pink-500">Eclipse Foundation</span>
                        }
                    </h3>
                </div>
                
                <div className="flex-grow overflow-hidden h-[100px]">
                    <p className="line-clamp-4">
                        {truncateText(excerpt, 210)}
                    </p>
                </div>
                
                <div className="mt-auto pt-4">
                    {isExternalLink ? (
                        <a href={post.node.fields.postPath} target="_blank" rel="noopener noreferrer">
                            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[160px] h-[48px] block">
                                Read More
                            </button>
                        </a>
                    ) : (
                        <Link to={post.node.fields.postPath}>
                            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[160px] h-[48px] block">
                                Read More
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventCard