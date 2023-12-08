import React, { Fragment, useState } from "react"
import { useI18next, Trans } from "gatsby-plugin-react-i18next"
import { Menu, Transition } from "@headlessui/react"
import { FaChevronDown } from "react-icons/fa"
import Flag from "react-world-flags"
import ISO6391 from "iso-639-1"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const LanguageSelector = (): JSX.Element => {
  const { languages, changeLanguage, language } = useI18next()
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  function ISO3166(lng: string) {
    // Convert locale to ISO 3166-1 alpha-2 https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    switch (lng) {
      case "en":
        return "us"
      case "en-GB":
        return "gb"
      case "zh-CN":
        return "cn"
      default:
        return lng
    }
  }

  function ISO639(lng: string) {
    // Convert locale to ISO 639-1 alpha-2 https://en.wikipedia.org/wiki/ISO_639-1_alpha-2
    switch (lng) {
      case "zh-CN":
        return "zh"
      case "en-GB":
        return "en"
      default:
        return lng
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-3 rounded-3xl bg-transparent px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:outline-none">
          <Flag className="mb-0" code={ISO3166(language)} width="35" />
          <span>{ISO6391.getNativeName(ISO639(selectedLanguage))}</span>
          <FaChevronDown
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-26 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((lng: string) => (
              <Menu.Item key={lng}>
                {({ active }) => (
                  <a
                    href="#"
                    id={lng}
                    data-testid={lng}
                    onClick={e => {
                      e.preventDefault()
                      changeLanguage(lng)
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    <div className="flex items-center space-x-2">
                      <Flag className="mb-0" code={ISO3166(lng)} width="35" />
                      <span>{ISO6391.getNativeName(ISO639(lng))}</span>
                    </div>
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageSelector
