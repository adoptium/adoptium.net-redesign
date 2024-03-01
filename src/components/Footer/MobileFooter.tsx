import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { Disclosure } from "@headlessui/react"

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
import {
  MobileFooter2Icon,
  MobileFooterCat,
  MobileFooterFacebook,
  MobileFooterLinkedin,
  MobileFooterSlack,
  MobileFooterSocial,
  MobileFooterYoutube,
} from "../Common/Icon"

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
              <Link
                key={index}
                to={link.url}
                className="text-white"
                placeholder={undefined}
              >
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
  <div className="flex flex-col space-y-4 !p-0">
    {footerData.map((data, index) => (
      <CustomDisclosure key={index} {...data} />
    ))}
    <div className="border-t border-[#3E3355] !mt-8 ">
      <div className="flex  items-center space-x-4 pt-8">
        <div className="">
          <MobileFooter2Icon />
        </div>
        <p className="text-[#C4BFCE] text-sm font-normal leading-5 !mb-0">
          Copyright © Eclipse Foundation. All Rights Reserved.
        </p>
      </div>
      <div className="flex items-center space-x-6 mt-6">
        <a href="">
          <MobileFooterFacebook />
        </a>
        <a href="">
          <MobileFooterSocial />
        </a>
        <a href="">
          <MobileFooterCat />
        </a>
        <a href="">
          <MobileFooterYoutube />
        </a>
        <a href="">
          <MobileFooterLinkedin />
        </a>
        <a href="">
          <MobileFooterSlack />
        </a>
      </div>
    </div>
  </div>
)

export default MobileFooter
