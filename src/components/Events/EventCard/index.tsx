import React from "react"
import { Link } from "gatsby-plugin-react-i18next"

const EventCard = ({ post }) => {
    return (
        <div className="flex flex-col max-w-[385px] rounded-3xl newscard-2 bg-[#200D46]">
            {post.node.frontmatter.featuredImage ? (
                <img className="m-0.5 rounded-3xl" src={post.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images.fallback.src} alt="blog banner image" />
            ) : (
                <img className="m-0.5 rounded-3xl" src={post.node.fields.generatedFeaturedImage} alt="blog banner image" />
            )}

            <div className="p-8">
                <h3 className="text-[24px] font-semibold leading-[133.333%]">
                    {post.node.frontmatter.title}
                </h3>
                <div className="flex justify-between py-4">
                    <h3 className="flex flex-col gap-1 tab-button-text text-white">
                        <span>{post.node.frontmatter.date}</span>
                    </h3>
                </div>
                <span>{post.node.excerpt}</span>
                <Link to={post.node.fields.postPath}>
                    <button className="rounded-2xl bg-transparent gradient-border mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[160px] h-[48px] block ">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EventCard