import React, { useState } from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { FaDocker } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { LiaTimesSolid } from "react-icons/lia"
import platformSupportData from "../../../json/supported-platforms.json"

const PlatformMatrix = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const handleToggleFaq = index => {
    setOpenFaq(prevOpenFaq => (prevOpenFaq === index ? null : index))
  }

  const isEven = n => {
    return n % 2 == 0
  }

  return (
    <div className="max-w-[1200px] w-full mx-auto px-6 pt-8 pb-14 md:pb-28 md:pt-16">
      <h3 className="text-4xl leading-[122%] md:text-5xl md:leading-[116%] text-white text-center font-semibold">
        Temurin™ Supported Platforms
      </h3>
      <p className="text-lightgrey mt-6 mb-0 tab-button-text text-center">
        This section lists the operating systems that are supported with the
        latest release of Eclipse Temurin.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center py-8 md:py-16">
        <div className="text-[14px] font-bold leading-[142.857%] text-white flex items-center gap-2">
          <IoMdCheckmarkCircleOutline size={25} className="text-pink" />{" "}
          Supported
        </div>
        <div className="text-[14px] font-bold leading-[142.857%] text-white flex items-center gap-2">
          <FaDocker size={25} className="text-pink" /> Docker image available
        </div>
        <div className="text-[14px] font-bold leading-[142.857%] text-white flex items-center gap-2">
          <LiaTimesSolid size={25} className="text-pink" /> Not supported
        </div>
      </div>
      <div className="bg-[#200D46] p-6 md:p-8 rounded-[24px] mb-6">
        <div className="grid grid-cols-6 gap-6 pb-6 overflow-auto w-full text-center">
          <div className="text-[20px] leading-[140%] text-grey font-semibold">
            <Trans>Operating System</Trans>
          </div>
          <div className="text-[20px] leading-[140%] text-grey font-semibold">
            Version 8
          </div>
          <div className="text-[20px] leading-[140%] text-grey font-semibold">
            Version 11
          </div>
          <div className="text-[20px] leading-[140%] text-grey font-semibold">
            Version 17
          </div>
          <div className="text-[20px] leading-[140%] text-grey font-semibold">
            Version 21
          </div>
          <div className="text-[20px] leading-[140%] text-grey font-semibold">
            Version 24
          </div>
        </div>
        {platformSupportData.platforms.map((platform, index) => (
          <div key={index}>
            <div
              onClick={() => handleToggleFaq(index)}
              className="flex items-center justify-between py-5 cursor-pointer border-t border-[#3E3355]"
            >
              <h3 className="text-[22px] leading-[127.273%] md:text-[24px] md:leading-[133.333%] text-white">
                {platform.category}
              </h3>
              <span>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="46"
                    height="46"
                    rx="23"
                    stroke="#3E3355"
                    strokeWidth="2"
                  />
                  <path
                    className={`transition duration-700 ease-in-out ${
                      openFaq === index ? "rotate-90" : "rotate-0"
                    }`}
                    d="M24 17V31"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 24H31"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div
              className={`flex transition duration-700 ease-in-out items-center w-full ${
                openFaq === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              {openFaq === index && (
                <div className="w-full overflow-auto min-w-full">
                  {platform.distros.map((distro, distroIndex) => (
                    <div
                      className={`flex items-center justify-center min-w-[1040px] md:px-3 py-5 rounded-[24px] ${isEven(distroIndex) && `bg-[#2B194F]`}`}
                    >
                      <h3 className="tab-button-text text-white flex items-center min-w-[164px] lg:min-w-[220px] ml:30">
                        {distro.name}
                      </h3>
                      {Object.entries(distro.versions).map(
                        ([version, { supported, docker }], versionIndex) => (
                          <div
                            key={versionIndex}
                            className="flex items-center justify-center gap-3 min-w-[164px]"
                          >
                            <span>
                              {supported ? (
                                <IoMdCheckmarkCircleOutline
                                  size={25}
                                  className="text-pink"
                                />
                              ) : (
                                <LiaTimesSolid
                                  size={25}
                                  className="text-pink"
                                />
                              )}
                            </span>
                            <span>
                              {docker ? (
                                <FaDocker size={25} className="text-pink" />
                              ) : (
                                ""
                              )}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  ))}
                  {/* </div> */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlatformMatrix
