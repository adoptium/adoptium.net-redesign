import React from "react"
import { FaTag } from "react-icons/fa"
import { Link } from "gatsby-plugin-react-i18next"

const Tags = props => {
  const tags = props.tags

  if (!tags) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {tags.map(tag => (
        <Link
          key={tag}
          to={`/news/tags/${tag}`}
          className="bg-pink hover:bg-pink-800 py-1 px-2 rounded-lg text-sm flex items-center"
        >
          <FaTag className="mr-2" />
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default Tags
