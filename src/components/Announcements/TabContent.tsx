import React from "react"
import { Link } from "../Link"

const TabContent = ({ posts }) => {
  return (
    <article>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={post.node.fields.postPath}>
            <div className="text-[#c4bfce">
              <p className="text-[12px] leading-[133.333%] text-lightgrey mb-0">
                {(() => {
                  const daysAgo = Math.floor((new Date().getTime() - new Date(post.node.frontmatter.date).getTime()) / (1000 * 60 * 60 * 24));
                  if (daysAgo < 7) {
                    return daysAgo === 1 ? `1 day ago` : `${daysAgo} weeks ago`;
                  } else {
                    const weeksAgo = Math.floor(daysAgo / 7);
                    return weeksAgo === 1 ? `1 week ago` : `${weeksAgo} weeks ago`;
                  }
                })()}
              </p>

              <h3 className="text-[20px] leading-[140%] text-white mb-4">
                {post.node.frontmatter.title}
              </h3>
              <p className="tab-button-text text-sm text-lightgrey pt-2">
                {post.node.frontmatter.description}
              </p>
            </div>
          </Link>
          <span className="h-[1px] w-full bg-[#3E3355] inline-block my-4"></span>
        </div>
      ))}
    </article>
  )
}

export default TabContent
