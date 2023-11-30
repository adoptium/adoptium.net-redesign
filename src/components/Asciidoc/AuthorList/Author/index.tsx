import React from "react"

interface Props {
  username: string
  size: string
}

const Author = ({ username, size }: Props): null | JSX.Element => {
  if (!username) {
    return null
  }
  // Clean up username and build links.
  const githubUserName = username.trim()
  const githubLink = `https://github.com/${githubUserName}`
  const githubImgLink = `https://github.com/${githubUserName}.png?size=${size}`

  return (
    <a
      href={githubLink}
      aria-label={githubUserName}
      key={username}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="rounded-full border-solid border-4 border-purple"
        style={{ maxWidth: `${size}px` }}
        src={githubImgLink}
        alt={username}
      />
    </a>
  )
}

export default Author
