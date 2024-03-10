import React from "react"
import CommonButton from "../Common/CommonButton"
import CommonHeading from "../Common/CommonHeading"
import { CrossIcon } from "../Common/Icon"

const TryDocumentation = () => {
  const DocumentationData = [
    {
      id: 1,
      icon: <CrossIcon />,
      description: "  Get Temurin",
    },
    {
      id: 2,
      icon: <CrossIcon />,
      description: "  Get Temurin",
    },
    {
      id: 3,
      icon: <CrossIcon />,
      description: "  Get Temurin",
    },
    {
      id: 4,
      icon: <CrossIcon />,
      description: "  Get Temurin",
    },
    {
      id: 5,
      icon: <CrossIcon />,
      description: "  Get Temurin",
    },
    {
      id: 6,
      icon: <CrossIcon />,
      description: "  Get Temurin",
    },
  ]
  return (
    <div>
      <div className="max-w-[1264px] md:px-0 px-6 w-full mx-auto py-10 md:pt-20 md:pb-28">
        <div className="max-w-[780px] mx-auto">
          <CommonHeading
            title="Haven’t found what you’re looking for? Try documentation"
            description={
              "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
            }
            className={"text-center "}
          />
        </div>
        <div className="max-w-[1048px] mx-auto flex  justify-center gap-4 md:gap-6 flex-wrap items-center mt-16">
          {DocumentationData.map((data, index) => (
            <div
              key={index}
              className="relative newscard-2 cursor-pointer max-w-[420px] sm:max-w-[290px] w-full  flex justify-start gap-4 items-center rounded-[22px] bg-tones-white backdrop-blur-[12px] px-6 py-6"
            >
              <span>{data.icon}</span>
              <p className="text-[24px] font-hanken leading-[32px] text-white my-0">
                {data.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap items-center gap-6 md:gap-10 mt-16">
          <p className="text-[20px] font-hanken leading-[140%] text-white my-0 text-center">
            Eclipse Temurin offers high-performance
          </p>
          <CommonButton className={"!w-[230px] !mt-0"} icon={undefined}>
            See all Documentation
          </CommonButton>
        </div>
      </div>
    </div>
  )
}

export default TryDocumentation
