import React from "react"
import { Link } from "../Link"

const TabContent = ({ posts }) => {
  return (
    <article>
      {posts.map((post, index) => (
        <>
          <Link to={post.node.fields.postPath} key={index}>
          <div className="text-[#c4bfce">
            <p className="texxt-[12px] leading-[133.333%] text-lightgrey mb-0">
              {Math.floor((new Date().getTime() - new Date(post.node.frontmatter.date).getTime()) / (1000 * 60 * 60 * 24 * 7))} weeks ago
            </p>

            <h3 className="text-[20px] leading-[140%] text-white">
              {post.node.frontmatter.title}
            </h3>
            <p className="tab-button-text text-sm text-lightgrey pt-2">
              {post.node.frontmatter.description}
            </p>
          </div>
          </Link>
          <span className="h-[1px] w-full bg-[#3E3355] inline-block my-4"></span>
        </>
      ))}
    </article>
  )
}

export default TabContent
