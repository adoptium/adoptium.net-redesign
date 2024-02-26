import React, { useState } from "react"
import { RedIcon } from "../Common/Icon"

const ReleaseRoadMapMobile = () => {
  const [openFaqs, setOpenFaqs] = useState([false, false, false])
  console.log(openFaqs)

  const handleToggleFaq = index => {
    const updatedFaqs = [...openFaqs]
    updatedFaqs[index] = !updatedFaqs[index]
    setOpenFaqs(updatedFaqs)
    console.log(updatedFaqs)
  }

  const faqs = [
    {
      title: "Now",
      number: "2",
      content: [
        "Lorem ipsum dolor sit amet ",
        "Lorem ipsum dolor sit amet ",
        "Lorem ipsum dolor sit amet ",
        "Lorem ipsum dolor sit amet ",
      ],
    },
    {
      number: "2",
      title: "Next",
      content: ["Lorem ipsum dolor sit amet ", "Lorem ipsum dolor sit amet "],
    },
    {
      number: "2",
      title: "Later",
      content: [
        "Lorem ipsum dolor sit amet ",
        "Lorem ipsum dolor sit amet ",
        "Lorem ipsum dolor sit amet ",
      ],
    },
  ]

  return (
    <div className="md:hidden flex items-center gap-3 flex-col mt-10">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="p-4 flex flex-col w-full newscard-2 bg-[#1A0D35]"
        >
          <div
            onClick={() => handleToggleFaq(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <h3 className="text-[26px] leading-[130.769%] md:text-[32px] font-semibold text-white md:leading-[125%]">
                {faq.title}
              </h3>
              <div className="flex items-center gap-3">
                <span>
                  <RedIcon />
                </span>
                <p className="text-[16px] font-bold leading-[150%] text-primary mb-0">
                  {faq.number}
                </p>
              </div>
            </div>
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
                  d="M18 21L24 27L30 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {openFaqs[index] && (
            <div className="mt-[24px]  flex flex-col gap-3">
              {faq.content.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex rounded-2xl p-4 bg-[#26193F]"
                >
                  <p className="text-[20px] text-white leading-[140%] mb-0">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ReleaseRoadMapMobile
