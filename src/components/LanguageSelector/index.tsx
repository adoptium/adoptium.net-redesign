import React from 'react';
import { useI18next, Trans } from 'gatsby-plugin-react-i18next';
import Flag from 'react-world-flags'
import ISO6391 from 'iso-639-1';
import './LanguageSelector.scss';

const LanguageSelector = (): JSX.Element => {
  const {languages, changeLanguage} = useI18next();

  function ISO3166(lng: string) {
    // Convert locale to ISO 3166-1 alpha-2 https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    switch(lng) {
      case 'en':
        return 'us';
        case 'en-GB':
          return 'gb';
      case 'zh-CN':
        return 'cn';
      default:
        return lng;
    }
  }

  function ISO639(lng: string) {
    // Convert locale to ISO 639-1 alpha-2 https://en.wikipedia.org/wiki/ISO_639-1_alpha-2
    switch(lng) {
      case 'zh-CN':
        return 'zh';
      case 'en-GB':
        return 'en';
      default:
        return lng;
    }
  }

  return (
    <div className="App lngg">
      <div className="relative inline-block text-left">
        <button
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          aria-label="Language Selector"
          id="dropdown-flags"
        >
          <Trans>Change Language</Trans>
        </button>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((lng: string) => (
              <a
                href="#"
                id={lng}
                data-testid={lng}
                key={lng}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                <Flag code={ISO3166(lng)} width='35' /> 
                {ISO6391.getNativeName(ISO639(lng))}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
