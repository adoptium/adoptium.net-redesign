import React from "react"
import { GitHubLink, TwitterLink, LinkedinLink } from "../BlogAuthor"

import ProfilePicInline from "../ProfilePicInline"

const AuthorBio = ({ sliceContext }) => {
  const { author, identifier } = sliceContext

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 space-x-4">
      <ProfilePicInline identifier={identifier} name={author} />
      <span className="text-[16px] font-bold leading-[150%] text-white flex items-center">
      <span className="pr-2">{author.summary && <>{author.summary}</>}</span>
      <GitHubLink name={author.github} />
      <TwitterLink name={author.twitter} />
      <LinkedinLink name={author.linkedin} />
      </span>
    </div>
  )
}

export default AuthorBio
