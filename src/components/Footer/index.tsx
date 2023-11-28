import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { SmallLogoIcon } from "../Common/Icon"
import MobileFooter from "./MobileFooter"
import IconSocial from "../IconSocial"

interface FooterData {
  title: {
    key: string
    defaultText: string
  }
  links: Array<{
    text: {
      key: string
      defaultText: string
    }
    url: string
  }>
}

const footerData: FooterData[] = [
  {
    title: {
      key: "footer.eclipse.foundation",
      defaultText: "Eclipse Foundation",
    },
    links: [
      {
        text: { key: "footer.about.us", defaultText: "About Us" },
        url: "https://www.eclipse.org/org/",
      },
      {
        text: { key: "footer.contact.us", defaultText: "Contact Us" },
        url: "https://www.eclipse.org/org/foundation/contact.php",
      },
      {
        text: { key: "footer.donate", defaultText: "Donate" },
        url: "https://www.eclipse.org/donate/adoptium",
      },
      {
        text: { key: "footer.members", defaultText: "Members" },
        url: "https://www.eclipse.org/membership",
      },
      {
        text: { key: "footer.governance", defaultText: "Governance" },
        url: "https://www.eclipse.org/org/documents/",
      },
      {
        text: { key: "footer.code.of.conduct", defaultText: "Code of Conduct" },
        url: "https://www.eclipse.org/org/documents/Community_Code_of_Conduct.php",
      },
      {
        text: {
          key: "footer.logo.and.artwork",
          defaultText: "Logo and Artwork",
        },
        url: "https://www.eclipse.org/artwork/",
      },
      {
        text: {
          key: "footer.board.of.directors",
          defaultText: "Board of Directors",
        },
        url: "https://www.eclipse.org/org/foundation/directors.php",
      },
    ],
  },
  {
    title: { key: "footer.legal", defaultText: "Legal" },
    links: [
      {
        text: { key: "footer.privacy.policy", defaultText: "Privacy Policy" },
        url: "https://www.eclipse.org/legal/privacy.php",
      },
      {
        text: { key: "footer.terms.of.use", defaultText: "Terms of Use" },
        url: "https://www.eclipse.org/legal/termsofuse.php",
      },
      {
        text: { key: "footer.copyright.agent", defaultText: "Copyright Agent" },
        url: "https://www.eclipse.org/legal/copyright.php",
      },
      {
        text: {
          key: "footer.eclipse.public.license",
          defaultText: "Eclipse Public License",
        },
        url: "https://www.eclipse.org/legal/epl-2.0/",
      },
      {
        text: { key: "footer.legal.resources", defaultText: "Legal Resources" },
        url: "https://www.eclipse.org/legal/",
      },
    ],
  },
  {
    title: { key: "footer.useful.links", defaultText: "Useful Links" },
    links: [
      {
        text: { key: "footer.report.a.bug", defaultText: "Report a Bug" },
        url: "https://github.com/adoptium/adoptium-support/issues",
      },
      {
        text: { key: "footer.documentation", defaultText: "Documentation" },
        url: "/docs",
      },
      {
        text: {
          key: "footer.how.to.contribute",
          defaultText: "How to Contribute",
        },
        url: "/contributing",
      },
      {
        text: { key: "footer.mailing.lists", defaultText: "Mailing Lists" },
        url: "https://www.eclipse.org/mail/",
      },
      {
        text: { key: "footer.forums", defaultText: "Forums" },
        url: "https://www.eclipse.org/forums/",
      },
      {
        text: { key: "footer.marketplace", defaultText: "Marketplace" },
        url: "https://marketplace.eclipse.org/",
      },
      {
        text: { key: "footer.swag.store", defaultText: "Swag Store" },
        url: "https://store.adoptium.net/",
      },
    ],
  },
  {
    title: { key: "footer.useful.other", defaultText: "Other" },
    links: [
      {
        text: { key: "footer.ide.and.tools", defaultText: "IDE and Tools" },
        url: "https://www.eclipse.org/ide/",
      },
      {
        text: { key: "footer.projects", defaultText: "Projects" },
        url: "https://www.eclipse.org/projects",
      },
      {
        text: { key: "footer.working.groups", defaultText: "Working Groups" },
        url: "https://www.eclipse.org/org/workinggroups/",
      },
      {
        text: {
          key: "footer.research.eclipse",
          defaultText: "Research@Eclipse",
        },
        url: "https://www.eclipse.org/org/research/",
      },
      {
        text: {
          key: "footer.report.a.vulnerability",
          defaultText: "Report a Vulnerability",
        },
        url: "https://www.eclipse.org/security/",
      },
      {
        text: { key: "footer.service.status", defaultText: "Service Status" },
        url: "https://status.eclipse.org/",
      },
    ],
  },
]

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-blue">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 md:py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-8 border-b border-gray-800 mb-3 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            {footerData.map((section, index) => (
              <div key={index}>
                <p className="font-medium text-pink">
                  <Trans
                    i18nKey={section.title.key}
                    defaults={section.title.defaultText}
                  />
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => {
                    const isInternalLink = !/^https?:\/\//.test(link.url)

                    return (
                      <li key={linkIndex}>
                        {isInternalLink ? (
                          <Link
                            to={link.url}
                            className="text-white text-base font-normal leading-6 font-hanken transition hover:opacity-75 dark:text-gray-200"
                          >
                            <Trans
                              i18nKey={link.text.key}
                              defaults={link.text.defaultText}
                            />
                          </Link>
                        ) : (
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-base font-normal leading-6 font-hanken transition hover:opacity-75 dark:text-gray-200"
                          >
                            <Trans
                              i18nKey={link.text.key}
                              defaults={link.text.defaultText}
                            />
                          </a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-teal-600 flex dark:text-teal-300">
              <SmallLogoIcon />
              <p className="text-sm ml-3 flex items-center gap-4 text-white font-normal leading-5">
                Copyright © Eclipse Foundation. All Rights Reserved.
              </p>
            </div>

            <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <a
                  href="https://www.netlify.com"
                  rel="noreferrer"
                  target="_blank"
                  className="leading-6 transition hover:opacity-75 dark:text-gray-200"
                >
                  <img
                    src="/images/netlify-light.svg"
                    alt="Deploys by Netlify"
                    className="h-6"
                  />
                </a>
              </li>

              <IconSocial />
            </ul>
          </div>
        </div>
        <div className="w-full px-4 md:hidden block">
          <MobileFooter footerData={footerData} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
