import React from "react"
import { Link } from "gatsby"
import { capitalize } from "../../../util/capitalize"

const RelatedArticleCard = ({title, date, postPath, tags}) => {
  return (
    <div className="flex flex-col max-w-[392px] newscard-2 bg-[#200D46] p-6">
      <div className="relative">
        <img className=" mb-0 pb-5" src="/images/new-article-card-img.png" alt="" />
        {tags && tags.length > 0 && (
        <button className="text-[12px] font-semibold  leading-[33.333%] bg-[#3E3355] rounded-[80px] px-4 py-4 absolute top-3 right-4">
          {capitalize(tags[0])}
        </button>
        )}
      </div>
      <h2 className="text-[20px] font-semibold text-white leading-[140%] mb-0 pb-5">
        {title}{" "}
      </h2>
      <p className="mb-0">{date}</p>
      <Link
        to={postPath}
        className="py-3 text-base underline font-bold leading-6 text-white mt-4 block border-white w-fit"
      >
        Read More
      </Link>
    </div>
  )
}

export default RelatedArticleCard