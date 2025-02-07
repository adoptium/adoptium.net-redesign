import React, { Fragment, useState } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"
import { FaChevronDown } from "react-icons/fa"
import Flag from "react-world-flags"
import ISO6391 from "iso-639-1"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const LanguageSelector = (): JSX.Element => {
  const { languages, changeLanguage, language } = useI18next()
  const [selectedLanguage, setSelectedLanguage] = useState(language)

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
        <MenuButton className="inline-flex w-full justify-center gap-3 rounded-3xl bg-transparent h-full px-4 py-3 text-sm text-white shadow-xs border-2 border-gray-700">
          <Flag className="mb-0 h-5" code={ISO3166(language)} />
          <span>{ISO6391.getNativeName(ISO639(selectedLanguage))}</span>
          <FaChevronDown
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
            size={15}
          />
        </MenuButton>
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
        <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
          <div className="py-1">
            {languages.map((lng: string) => (
              <MenuItem key={lng}>
                {({ focus }) => (
                  <a
                    href="#"
                    id={lng}
                    data-testid={lng}
                    onClick={e => {
                      e.preventDefault()
                      changeLanguage(lng)
                    }}
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    <div className="flex items-center space-x-2">
                      <Flag className="mb-0" code={ISO3166(lng)} width="35" />
                      <span className="ml-2">{ISO6391.getNativeName(ISO639(lng))}</span>
                    </div>
                  </a>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default LanguageSelector
