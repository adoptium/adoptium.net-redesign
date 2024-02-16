import React from "react"
import { CrossIcon, DownloadIcon, MacIcon, WindowIcon } from "../Common/AppIcon"
import Heading from "../Common/Heading"

const ButtonContent = () => {
  const navigationItem = [
    {
      title: "Release notes",
    },
    {
      title: "Installation guide",
    },
    {
      title: "Supported Configurations",
    },
    {
      title: "Terms of use",
    },
    {
      title: "Source code",
    },
  ]
  const CardData = [
    {
      icon: <WindowIcon />,
      title: "Windows",
      description: "Liberica 11.0.21+10, Windows 64 bit, Standard",
    },
    {
      icon: <MacIcon />,
      title: "Mac",
      description: "Liberica 11.0.21+10, macOS 64 bit, Standard",
    },
    // Add more objects for additional cards
  ]
  return (
    <>
      <div className=" w-full max-w-[1264px] mx-auto">
        <ul className="flex md:flex-row flex-col gap-4 lg:gap-8 items-start  w-full  justify-start sm:justify-center sm:items-center  my-8 lg:my-16">
          {navigationItem.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 group items-center text-white hover:text-primary transition-all duration-300 ease-in-out text-xl font-normal cursor-pointer"
            >
              <span className=" group  ">
                <CrossIcon />
              </span>{" "}
              {item.title}
            </li>
          ))}
        </ul>

        <div className="flex justify-between flex-col md:flex-row mb-8 md:mb-16  w-full items-center  gap-8">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-[#200E46]  justify-between w-full border rounded-[24px] border-[#564873] h-[264px] flex flex-col   transition-all duration-300 ease-in-out hover:border-primary"
            >
              <span className="p-6 rounded-full w-fit bg-[#2B1A4F] border border-[#5A4D76]">
                {card.icon}
              </span>
              <div className="flex justify-between items-center gap-8">
                <div className="flex flex-col  space-y-2">
                  <h4 className="text-4xl font-semibold">{card.title}</h4>
                  <h5 className="text-base font-normal text-[#C4BFCE]">
                    {card.description}
                  </h5>
                </div>
                <span className="p-3 group cursor-pointer rounded-full w-fit bg-[#2B1A4F] border border-[#5A4D76] hover:border-primary  transition-all duration-300 ease-in-out">
                  <DownloadIcon />
                </span>
              </div>
            </div>
          ))}
        </div>

        <Heading title={"Latest Temurin"} />
      </div>
    </>
  )
}

export default ButtonContent
