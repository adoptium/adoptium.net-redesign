import React from "react"
import { Link } from "../Link"
import { localeDate } from "../../util/localeDate"
import { useI18next } from "gatsby-plugin-react-i18next"

const TabContent = ({ posts, isEvents = false }) => {
  const { language } = useI18next();
  if (isEvents) {
    return (
      <article>
        {posts.map((event, index) => (
          <div key={index}>
            <a href={event.infoLink} target="_blank" rel="noreferrer">
              <div className="text-[#c4bfce]">
                <p className="text-[12px] leading-[133.333%] text-lightgrey mb-0">
                  {localeDate(event.date, language)}
                </p>

                <h3 className="text-[20px] leading-[140%] text-white mb-4">
                  {event.title}
                </h3>
                {event.description && (
                  <p className="tab-button-text text-sm text-lightgrey pt-2">
                    {event.description.length > 150 ? `${event.description.substring(0, 150)}...` : event.description}
                  </p>
                )}
              </div>
            </a>
            <span className="h-[1px] w-full bg-[#3E3355] inline-block my-4"></span>
          </div>
        ))}
      </article>
    );
  }

  return (
    <article>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={post.node.fields.postPath}>
            <div className="text-[#c4bfce]">
              <p className="text-[12px] leading-[133.333%] text-lightgrey mb-0">
                {(() => {
                  const daysAgo = Math.floor((new Date().getTime() - new Date(post.node.frontmatter.date).getTime()) / (1000 * 60 * 60 * 24));
                  if (daysAgo < 7) {
                    return daysAgo === 1 ? `1 day ago` : `${daysAgo} days ago`;
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
