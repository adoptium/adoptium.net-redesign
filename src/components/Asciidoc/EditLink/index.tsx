import React from "react"
import { IoMdGitPullRequest } from "react-icons/io"
import { Trans } from "gatsby-plugin-react-i18next"

type Props = {
  relativePath?: string
}

const EditLink = ({ relativePath }: Props) => {
  if (!relativePath) {
    return null
  }

  const href = `https://github.com/adoptium/adoptium.net/edit/main/content/asciidoc-pages/${relativePath}`

  return (
    <div className="w-full px-6 py-8 rounded-2xl border-2 border-white border-opacity-50 flex-col justify-center items-start gap-2 inline-flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="w-20 h-20 relative">
          <img
            className="w-20 h-20 absolute border border-white backdrop-blur-md"
            src="/images/icons/edit.svg"
            aria-label="edit icon"
          />
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
          <div className="self-stretch flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch text-white text-xl md:text-2xl font-semibold md:leading-loose">
              <Trans
                i18nKey="asciidoc.edit.link.title"
                defaults="Help us make these docs great!"
              />
            </div>
            <div className="self-stretch">
              <span className="text-white text-base font-normal leading-normal">
                <Trans
                  i18nKey="asciidoc.edit.link.content"
                  defaults="All Adoptium docs are open source. See something that's wrong or unclear?"
                />
              </span>
            </div>
          </div>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[154px] h-[48px] block ">
              <Trans
                i18nKey="asciidoc.edit.link.button"
                defaults="Edit this page"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EditLink
