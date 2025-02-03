import React from "react"
import {
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from "react-share"

import {
  FaLinkedin,
  FaFacebookSquare,
  FaRedditSquare,
} from "react-icons/fa";

import {
  FaSquareXTwitter,
  FaSquareEnvelope,
} from "react-icons/fa6";

const ShareButton = props => {
  const { location, siteMetadata, post } = props
  const twitter = [siteMetadata.social.twitter]
  const url = siteMetadata.siteUrl + location.pathname

  const iconStyle = {
    paddingRight: "0.3em",
    marginBottom: "0.2em",
  }

  return (
    <div id="share-buttons">
      <TwitterShareButton
        aria-label="x"
        url={url}
        title={post.title}
        hashtags={post.tags}
        related={twitter}
        style={iconStyle}
      >
        <FaSquareXTwitter size={30} />
      </TwitterShareButton>

      <LinkedinShareButton
        aria-label="linkedin"
        url={url}
        title={post.title}
        source={siteMetadata.siteUrl}
        style={iconStyle}
      >
        <FaLinkedin size={30}/>
      </LinkedinShareButton>

      <FacebookShareButton aria-label="facebook" url={url} style={iconStyle}>
        <FaFacebookSquare size={30} />
      </FacebookShareButton>

      <RedditShareButton
        aria-label="reddit"
        url={url}
        title={post.title}
        style={iconStyle}
      >
        <FaRedditSquare size={30} />
      </RedditShareButton>

      <EmailShareButton
        aria-label="email"
        url={url}
        subject={post.title}
        style={iconStyle}
      >
        <FaSquareEnvelope size={30} />
      </EmailShareButton>
    </div>
  )
}

export default ShareButton
