import React from "react"
import { DownloadIcon } from "./AppIcon"

const Heading = ({ title }) => {
  return (
    <section className=" py-8 md:py-16">
      <h2 className="main-heading mb-10 ">{title}</h2>
      <div className="flex justify-center items-center">
        <button className="bg-transparent  flex items-center justify-center  border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[191px] h-[48px] rounded-2xl gradient-border">
          Source Code{" "}
          <span className="ml-2">
            <DownloadIcon />
          </span>
        </button>
      </div>
    </section>
  )
}

export default Heading
