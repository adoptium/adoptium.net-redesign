import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { FaGithub, FaLinkedin, FaSlack, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const SocialIcons = () => {
  return (
    <>
      <li>
        <a
          href="https://x.com/adoptium"
          rel="noreferrer"
          target="_blank"
          className="leading-6 transition hover:opacity-75 dark:text-gray-200"
        >
          <span className="sr-only">Xcom</span>
          <FaXTwitter className="h-6 w-6" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/showcase/adoptium/"
          rel="noreferrer"
          target="_blank"
          className="leading-6 transition hover:opacity-75 dark:text-gray-200"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin className="h-6 w-6" />
        </a>
      </li>

      <li>
        <a
          href="https://www.youtube.com/c/EclipseAdoptium"
          rel="noreferrer"
          target="_blank"
          className="leading-6 transition hover:opacity-75 dark:text-gray-200"
        >
          <span className="sr-only">YouTube</span>
          <FaYoutube className="h-6 w-6" />
        </a>
      </li>

      <li>
        <a
          href="https://github.com/adoptium"
          rel="noreferrer"
          target="_blank"
          className="leading-6 transition hover:opacity-75 dark:text-gray-200"
        >
          <span className="sr-only">GitHub</span>
          <FaGithub className="h-6 w-6" />
        </a>
      </li>

      <li>
        <Link
          to="/slack"
          rel="noreferrer"
          target="_blank"
          className="leading-6 transition hover:opacity-75 dark:text-gray-200"
        >
          <span className="sr-only">Slack</span>
          <FaSlack className="h-6 w-6" />
        </Link>
      </li>
    </>
  )
}

export default SocialIcons
