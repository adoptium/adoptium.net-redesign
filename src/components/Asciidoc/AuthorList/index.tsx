import React from "react"
import Author from "./Author"
import { Trans } from "gatsby-plugin-react-i18next"

interface Props {
  authors: string[]
}

const AuthorList = ({ authors }: Props): JSX.Element => {
  if (authors.length) {
    return (
      <div className="mt-10 flex-col justify-center items-start gap-4">
        <div className="self-stretch text-white my-5 text-lg font-semibold leading-normal">
          <Trans
            i18nKey="asciidoc.author.list.title"
            defaults="Documentation Authors"
          />
        </div>
        <div className="flex flex-wrap justify-start items-center space-x-[-12px]">
          {authors.map(
            (author, i): JSX.Element => (
              <Author username={author} key={author} size="48" />
            ),
          )}
        </div>
      </div>
    )
  }

  return <div />
}

export default AuthorList
