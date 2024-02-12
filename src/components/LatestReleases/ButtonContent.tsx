import React from "react"
import { CrossIcon } from "../Common/AppIcon"

const ButtonContent = () => {
  return (
    <>
      <ul className="flex md:flex-row flex-col gap-4 lg:gap-8 items-start   justify-start px-4 lg:px-6 my-8 lg:my-16">
        <li className="flex gap-3 items-center  text-xl font-normal cursor-pointer">
          <span>
            <CrossIcon />
          </span>{" "}
          Release notes
        </li>
        <li className="flex gap-3 items-center text-xl font-normal cursor-pointer ">
          <span>
            <CrossIcon />
          </span>{" "}
          Installation guide
        </li>
        <li className="flex gap-3 items-center  text-xl font-normal cursor-pointer">
          <span>
            <CrossIcon />
          </span>{" "}
          Supported Configurations
        </li>
        <li className="flex gap-3 items-center text-xl font-normal  cursor-pointer">
          <span>
            <CrossIcon />
          </span>{" "}
          Terms of use
        </li>
        <li className="flex gap-3 items-center text-xl font-normal  cursor-pointer">
          <span>
            <CrossIcon />
          </span>{" "}
          Source code
        </li>
      </ul>
    </>
  )
}

export default ButtonContent
