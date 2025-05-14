import React from "react"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

type I18nLinkProps = GatsbyLinkProps<any> & {
  language?: string
  placeholder?: string
}

export const Link: React.FC<I18nLinkProps> = ({ language, to, ...rest }) => {
  const {
    language: currentLanguage,
    defaultLanguage,
    generateDefaultLanguagePage,
  } = useI18next()

  const urlLanguage = language || currentLanguage
  const getLanguagePath = (lang: string) =>
    generateDefaultLanguagePage || lang !== defaultLanguage ? `/${lang}` : ""

  const localizedTo = `${getLanguagePath(urlLanguage)}${to}`

  // @ts-ignore
  return <GatsbyLink {...rest} to={localizedTo} />
}
