import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "../Link"

import ProfilePic from "../ProfilePic"

export const GitHubLink = props => {
  if (!props.name) {
    return null
  }

  return (
    <a
      className="px-1"
      aria-label="GitHub Profile"
      href={`https://github.com/${props.name}`}
      target="blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={25} />
    </a>
  )
}

export const TwitterLink = props => {
  if (!props.name) {
    return null
  }

  return (
    <a
      className="px-1"
      aria-label="Twitter Profile"
      href={`https://x.com/${props.name}`}
      target="blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter size={25} />
    </a>
  )
}

export const LinkedinLink = props => {
  if (!props.name) {
    return null
  }

  return (
    <a
      className="px-1"
      aria-label="LinkedIn Profile"
      href={`https://www.linkedin.com/in/${props.name}`}
      target="blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={25} />
    </a>
  )
}

const BlogAuthor = props => {
  const author = props.author
  const identifier = props.identifier
  const href = `/news/author/${identifier}`

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <ProfilePic identifier={identifier} name={author.name} />
      <p>
        Posted by <Link to={href}>{author.name}</Link>
        {author.summary && <>– {author.summary}</>}{" "}
        <GitHubLink name={author.github} />{" "}
        <TwitterLink name={author.twitter} />{" "}
        <LinkedinLink name={author.linkedin} />
      </p>
    </div>
  )
}

export default BlogAuthor
