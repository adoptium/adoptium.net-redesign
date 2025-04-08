import { graphql } from "gatsby"
import { convert } from "html-to-text"
import React, { useEffect } from "react"

import AsciiDocFormatter from "../util/asciidocFormatter"
import highlightCode from "../util/highlightCode"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import EditLink from "../components/Asciidoc/EditLink"
import AuthorsList from "../components/Asciidoc/AuthorList"
import InstallTabs from "../components/InstallTabs"
import Seo from "../components/Seo"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import LinkText from "../components/LinkText"
import ContactUs from "../components/ContactUs"
import FAQ from "../components/FAQ"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-free/css/v4-shims.min.css"

const AsciidocTemplate = ({ data, pageContext }) => {
  const { t } = useTranslation()

  useEffect(() => {
    highlightCode()
  })

  const { asciidoc } = data // data.asciidoc holds our data
  const { document, fields, html, pageAttributes } = asciidoc
  const pageAuthorList = pageAttributes.authors || ""
  const basedOnSha = pageAttributes.based_on || ""
  const { relativePath, slug } = fields
  const { defaultGitSHA, locale, language } = pageContext

  // Translated version of the page doesn't exist and isn't en-GB
  const displayDefaultLocaleWarning =
    locale !== language && language !== "en-GB"
  const displayOutdatedWarning =
    defaultGitSHA && basedOnSha && defaultGitSHA !== basedOnSha

  return (
    <Layout>
      <PageHeader
        title={document.title}
        subtitle="Documentation"
        description=""
      />
      <section className="mx-auto max-w-4xl w-full p-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="asciidoc-container w-full" id="asciidoc-container">
          <div className="col-lg-3 hide-on-mobile">
            {/* Leaving space for a table of contents (side bar) */}
          </div>
          <div className="asciidoc col-lg-6 col-md-12">
            {displayDefaultLocaleWarning && (
              <div className="alert alert-warning">
                <i className="fas fa-exclamation-triangle pe-1" />
                <Trans
                  i18nKey="asciidoc.template.warn.default.locale"
                  defaults="This page is the <englishVersionLink>English version</englishVersionLink> because it is not available in your language. Please help us by translating this page into your language. See our <translationGuideLink>translation guide</translationGuideLink> for more information."
                  components={{
                    englishVersionLink: (
                      <LinkText
                        href={`https://github.com/adoptium/adoptium.net/blob/main/content/asciidoc-pages/${relativePath.replace(
                          `.${locale}`,
                          "",
                        )}`}
                      />
                    ),
                    translationGuideLink: (
                      <LinkText href="https://github.com/adoptium/adoptium.net/tree/main/content/asciidoc-pages#localising-documentation" />
                    ),
                  }}
                />
              </div>
            )}
            {displayOutdatedWarning && (
              <div className="alert alert-warning">
                <i className="fas fa-exclamation-triangle pe-1" />
                <Trans
                  i18nKey="asciidoc.template.warn.outdated"
                  defaults="This localized page is based on a <previousEnglishVersionLink>previous version of the English page</previousEnglishVersionLink> and might be inaccurate. Please help us by updating this page to match the <lastEnglishVersionLink>latest version of the English page</lastEnglishVersionLink>. See our <translationGuideLink>translation guide</translationGuideLink> for more information."
                  components={{
                    previousEnglishVersionLink: (
                      <LinkText
                        href={`https://github.com/adoptium/adoptium.net/blob/${basedOnSha}/content/asciidoc-pages/${relativePath.replace(
                          `.${locale}`,
                          "",
                        )}`}
                      />
                    ),
                    lastEnglishVersionLink: (
                      <LinkText
                        href={`https://github.com/adoptium/adoptium.net/blob/main/content/asciidoc-pages/${relativePath.replace(
                          `.${locale}`,
                          "",
                        )}`}
                      />
                    ),
                    translationGuideLink: (
                      <LinkText href="https://github.com/adoptium/adoptium.net/tree/main/content/asciidoc-pages#localising-documentation" />
                    ),
                  }}
                />
              </div>
            )}
            {slug === "/installation/" && (
              <section className="adopt-demo-container hide-on-mobile my-5">
                <div className="adopt-demo mx-auto">
                  <InstallTabs />
                </div>
              </section>
            )}
            <div className="asciidoc-content prose prose-invert lg:prose-lg max-w-none">
              <AsciiDocFormatter content={html} t={t} />
            </div>
            <div className="h-px my-5 border border-gray-700"></div>
            <AuthorsList authors={pageAuthorList.split(",")} />
            <EditLink relativePath={relativePath} />
          </div>
          <div className="col-lg-3 hide-on-mobile"></div>
        </div>
      </section>
      <ContactUs
        title="Connect with the community"
        buttontitle="Learn More"
        description="Join our Slack channel to discuss work and reach out to project maintainers."
        linkTo="/slack" 
      />
      <FAQ />
    </Layout>
  )
}

export default AsciidocTemplate

export const Head = ({
  data: {
    asciidoc: { document },
  },
}) => {
  return <Seo title={convert(document.title)} />
}

export const pageQuery = graphql`
  query ($locale: String!, $title: String!, $language: String!) {
    asciidoc(
      fields: { locale: { eq: $locale } }
      document: { title: { eq: $title } }
    ) {
      html
      document {
        title
        main
      }
      fields {
        slug
        relativePath
      }
      pageAttributes {
        authors
        based_on
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
