import React from "react"
import { Link } from "../../Link"
import ProfilePicInline from "../../ProfilePicInline"

const Byline = props => {
  const { author, date, identifier } = props

  const href = `/news/author/${identifier}`

  return (
    <div className="flex justify-center items-center gap-5">
      <ProfilePicInline identifier={identifier} name={author} />
      <span className="text-[16px] font-bold leading-[150%] text-white">
        <Link to={href}><span className="text-primary pr-2">{author},</span> {date}</Link>
      </span>
    </div>
  )
}

export default Byline
