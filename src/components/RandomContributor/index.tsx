import React, { MutableRefObject, useRef } from "react"
import { useAdoptiumContributorsApi, useOnScreen } from "../../hooks"
import "./RandomContributor.scss"
import AnimatedPlaceholder from "../AnimatedPlaceholder"
import { Trans } from "gatsby-plugin-react-i18next"
import LinkText from "../LinkText"

const RandomContributor = ({ style }): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen(ref as MutableRefObject<Element>, true)
  const contributor = useAdoptiumContributorsApi(isVisible)

  return (
    <div
      ref={ref}
      className="flex items-center justify-center p-4 space-x-4 w-[325px] rounded-3xl border border-white/50"
      style={style}
    >
      {!contributor && isVisible && <AnimatedPlaceholder />}
      {contributor && (
        <>
          <div className="random-contributor__avatar">
            <a
              href={contributor.profileUri}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src={contributor.avatarUri}
                className="w-[150px] !mb-0 mw-[60px] rounded-full"
                alt="Avatar of an Adoptium contributor"
              />
            </a>
          </div>
          <div className="random-contributor__thank text-white text-sm font-normal leading-6">
            <Trans
              i18nKey="asciidoc.random.contributor.text"
              defaults="Thank you <profileUri>{{login}}</profileUri> for making <commitsListUri>{{contributionsCount}} contribution(s)</commitsListUri> to <repoUri>{{repo}}</repoUri>"
              components={{
                profileUri: <LinkText href={contributor.profileUri} />,
                commitsListUri: <LinkText href={contributor.commitsListUri} />,
                repoUri: (
                  <LinkText
                    href={`https://github.com/adoptium/${contributor.repo}`}
                  />
                ),
              }}
              values={{
                login: contributor.login,
                contributionsCount: contributor.contributionsCount,
                repo: contributor.repo,
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default RandomContributor
