import React, { useState } from "react"
import CommonHeading from "../Common/CommonHeading"
import { CheckIcon, DockerIcon, RedCrossIcon } from "../Common/AppIcon"

const SupportedPlatform = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const handleToggleFaq = index => {
    setOpenFaq(prevOpenFaq => (prevOpenFaq === index ? null : index))
  }
  const faqdata = [
    {
      id: 1,
      question: " Windows (x86)",
    },
    {
      id: 2,
      question: " Windows (x86)",
    },
    {
      id: 3,
      question: "Linux (x64)",
    },
    {
      id: 4,
      question: "Linux (ARM 64-bit)",
    },
    {
      id: 5,
      question: "Linux (ARM 32-bit Hard-Float)",
    },
    {
      id: 6,
      question: "Linux (ARM 32-bit Hard-Float)",
    },
    {
      id: 7,
      question: "Linux (PowerPC 64-bit Little Endian)",
    },

    {
      id: 8,
      question: "macOS (x64)",
    },
    {
      id: 9,
      question: "macOS (Apple Silicon)",
    },
    {
      id: 10,
      question: "Solaris (x64 and Sparc)",
    },
    {
      id: 11,
      question: "AIX (PowerPC 64-bit Big Endian)",
    },
  ]

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
        <h3 className="text-[14px] font-bold leading-[142.857%] text-white flex items-center gap-2">
          <span>
            <CheckIcon />
          </span>
          Supported
        </h3>
        <h3 className="text-[14px] font-bold leading-[142.857%] text-white flex items-center gap-2">
          <span>
            <DockerIcon />
          </span>
          Docker image available
        </h3>
        <h3 className="text-[14px] font-bold leading-[142.857%] text-white flex items-center gap-2">
          <span>
            <RedCrossIcon />
          </span>
          Not supported
        </h3>
      </div>
      <div className="bg-[#200D46] p-4 md:p-8 rounded-[24px] w-full  ">
        <div className=" flex items-center justify-between gap-5 pb-6 overflow-auto w-full ">
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[190px]">
            Operating System
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[190px]">
            Temurin Version 8
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[190px]">
            Temurin Version 11
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[190px]">
            Temurin Version 17
          </h3>
          <h3 className="text-[20px] leading-[140%] text-lightgrey font-semibold min-w-[190px]">
            Temurin Version 21
          </h3>
        </div>
        <div>
          {faqdata.map((faq, index) => (
            <div key={faq.id}>
              <div
                onClick={() => handleToggleFaq(index)}
                className="flex items-center justify-between py-5 border-t cursor-pointer border-[#3E3355]"
              >
                <h3 className=" text-[22px] leading-[127.273%] md:text-[24px] font-semibold md:leading-[133.333%] text-white">
                  {faq.question}
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
                      stroke-Width="2"
                    />
                    <path
                      className={` transition duration-700 ease-in-out ${
                        openFaq === index ? "rotate-90" : "rotate-0"
                      }`}
                      d="M24 17V31"
                      stroke="white"
                      stroke-Width="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 24H31"
                      stroke="white"
                      stroke-Width="1.5"
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
                  <div className="w-full overflow-auto min-w-full ">
                    <div className="flex items-center justify-center min-w-[1040px] bg-[#2B194F] md:px-3 py-5 rounded-[24px]">
                      <h3 className="tab-button-text text-white flex justify-center items-center min-w-[194px] lg:min-w-[217px]">
                        Windows Server 2022
                      </h3>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px] ">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  min-w-[1040px] md:px-3 py-5 rounded-[24px]">
                      <h3 className="tab-button-text text-white flex justify-center items-center min-w-[194px] lg:min-w-[217px]">
                        Windows Server 2019
                      </h3>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px] ">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                        <span>
                          <DockerIcon />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  min-w-[1040px] bg-[#2B194F] md:px-3 py-5 rounded-[24px]">
                      <h3 className="tab-button-text text-white flex justify-center items-center min-w-[194px] lg:min-w-[217px]">
                        Windows Server 2016
                      </h3>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px] ">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center min-w-[1040px] w-full md:px-3 py-5 rounded-[24px]">
                      <h3 className="tab-button-text text-white flex justify-center items-center min-w-[194px] lg:min-w-[217px]">
                        Windows Server 2012 R2
                      </h3>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px] ">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center min-w-[1040px] w-full bg-[#2B194F] md:px-3 py-5 rounded-[24px]">
                      <h3 className="tab-button-text text-white flex justify-center items-center min-w-[194px] lg:min-w-[217px]">
                        Windows Server 2016
                      </h3>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px] ">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center min-w-[1040px] w-full md:px-3 py-5 rounded-[24px]">
                      <h3 className="tab-button-text text-white flex justify-center items-center min-w-[217px]">
                        Windows Server 2012 R2
                      </h3>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px] ">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3 min-w-[194px] lg:min-w-[217px]">
                        <span>
                          <CheckIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupportedPlatform
