import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { Disclosure } from "@headlessui/react"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
import { Link } from "../Link"

// Custom Disclosure component
const CustomDisclosure = ({ title, links }) => (
  <Disclosure>
    {({ open }) => (
      <>
        {/* Disclosure button */}
        <Disclosure.Button className="flex justify-between w-full items-center">
          <span className="text-white text-xl font-semibold leading-7">
            <Trans i18nKey={title.key} defaults={title.defaultText} />
          </span>
          <span className="text-white">
            {open ? <CiCircleMinus size={45} /> : <CiCirclePlus size={45} />}
          </span>
        </Disclosure.Button>

        {/* Disclosure panel */}
        <Disclosure.Panel className="text-base font-normal leading-6 space-y-2 flex flex-col">
          {links.map((link, index) => {
            const isInternalLink = !/^https?:\/\//.test(link.url)

            return isInternalLink ? (
              <Link key={index} to={link.url} className="text-white">
                <Trans
                  i18nKey={link.text.key}
                  defaults={link.text.defaultText}
                />
              </Link>
            ) : (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Trans
                  i18nKey={link.text.key}
                  defaults={link.text.defaultText}
                />
              </a>
            )
          })}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

// Main App component
const MobileFooter = ({ footerData }) => (
  <div className="flex flex-col space-y-4 p-4">
    {footerData.map((data, index) => (
      <CustomDisclosure key={index} {...data} />
    ))}
  </div>
)

export default MobileFooter
