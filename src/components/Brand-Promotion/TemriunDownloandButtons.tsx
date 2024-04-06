import React from "react"
import CommonHeading from "../Common/CommonHeading"
import { CopyIcon } from "../Common/AppIcon"

const TemriunDownloandButtons = () => {
  const repeatArray = [1, 2, 3, 4, 5]
  return (
    <div className="max-w-[860px] mx-auto px-6 py-16">
      <CommonHeading
        title={"Temurin Download Buttons"}
        description={
          "If you value Eclipse technologies, please consider becoming a sponsor through the Eclipse Foundation. Contributions from users like you help fund the operations of the Adoptium working group. All money contributed to the Eclipse Foundation will be used to support the Eclipse community through the Adoptium working group."
        }
        className={"text-center"}
      />
      <div className="pt-16">
        <div className="flex items-center justify-between pb-6 border-[#3E3355] border-b">
          <div className="flex items-center gap-20 text-2xl leading-[133.333%] font-semibold text-white">
            <h3>Button</h3>
            <h3>Name</h3>
          </div>
          <div className=" text-2xl leading-[133.333%] font-semibold text-white">
            <h3>Copy code</h3>
          </div>
        </div>
        {repeatArray.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-6 border-[#3E3355] border-b"
          >
            <div className="flex items-center gap-12 ">
              <button className="bg-primary px-6 py-3 rounded-[49.15px] text-[9.83px] font-bold leading-[14.745px] text-white">
                Get a Quote
              </button>
              <h3 className="text-white text-[20px] leading-[140%]">
                Name of button
              </h3>
            </div>
            <div className=" ">
              <span className="cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 7.83008H9.16667C8.24619 7.83008 7.5 8.57627 7.5 9.49674V16.9967C7.5 17.9172 8.24619 18.6634 9.16667 18.6634H16.6667C17.5871 18.6634 18.3333 17.9172 18.3333 16.9967V9.49674C18.3333 8.57627 17.5871 7.83008 16.6667 7.83008Z"
                    stroke="#FF1464"
                    stroke-Width="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16797 12.83H3.33464C2.89261 12.83 2.46868 12.6544 2.15612 12.3419C1.84356 12.0293 1.66797 11.6054 1.66797 11.1634V3.66337C1.66797 3.22134 1.84356 2.79742 2.15612 2.48486C2.46868 2.1723 2.89261 1.9967 3.33464 1.9967H10.8346C11.2767 1.9967 11.7006 2.1723 12.0131 2.48486C12.3257 2.79742 12.5013 3.22134 12.5013 3.66337V4.4967"
                    stroke="#FF1464"
                    stroke-Width="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemriunDownloandButtons
