import React, { useState } from "react"

const FaqsBlock = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const handleToggleFaq = index => {
    setOpenFaq(prevOpenFaq => (prevOpenFaq === index ? null : index))
  }
  return (
    <div className="max-w-[1048px] mx-auto px-6 pb-8 md:pb-16 pt-20 md:pt-28">
      <div>
        {[0, 1, 2, 3, 4, 5].map(index => (
          <div
            key={index}
            className={`flex flex-col py-6 first:pt-0 border-[#3E3355] border-b ${
              openFaq === index ? "" : ""
            }`}
          >
            <div
              onClick={() => handleToggleFaq(index)}
              className="flex justify-between gap-2 items-center cursor-pointer"
            >
              <h3 className="text-[20px] font-semibold leading-[28px]">
                Where are the latest Adoptium® JDKs?
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
                    className={` transition duration-700 ease-in-out ${
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
              className={`flex transition duration-700 ease-in-out items-center ${
                openFaq === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              {openFaq === index && (
                <div className="flex">
                  <p className="my-0 pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, itaque culpa in recusandae ipsam ea quisquam
                    temporibus praesentium quas esse animi cupiditate dicta qui
                    maxime quam, doloremque iure. Repudiandae, animi.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqsBlock
