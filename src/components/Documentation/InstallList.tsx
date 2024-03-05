import React from "react"
import { CrossIcon, DocumentArrowIcon } from "../Common/Icon"

const InstallList = ({ className }) => {
  const documentationdata = [
    {
      id: 1,
      title: "  Install Temurin",
      icon: <DocumentArrowIcon />,
    },
    {
      id: 2,
      title: "  Install Temurin",
      icon: <DocumentArrowIcon />,
    },
    {
      id: 3,
      title: "  Install Temurin",
      icon: <DocumentArrowIcon />,
    },
    {
      id: 4,
      title: "  Install Temurin",
      icon: <DocumentArrowIcon />,
    },
    {
      id: 5,
      title: "  Install Temurin",
      icon: <DocumentArrowIcon />,
    },
  ]
  return (
    <>
      <div className={`pt-16 ${className}`}>
        <div className="  cursor-pointer    flex justify-start gap-3 items-center   pb-6">
          <span>
            <CrossIcon />
          </span>
          <p className="text-[20px] md:leading-[127.273%] md:text-[24px] font-hanken font-semibold leading-[32px] text-white my-0">
            Get Temurin
          </p>
        </div>
        <div>
          {documentationdata.map((data, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-6   border-[#3E3355] ${
                index === 0 ? "border-y" : "border-b"
              }`}
            >
              <h3 className="text-[20px] font-normal text-white leaiding-[140%]">
                {data.title}
              </h3>
              <span className="cursor-pointer">{data.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default InstallList
