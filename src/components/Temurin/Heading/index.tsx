import React from "react"
import { DownloadIcon } from "../../Common/AppIcon"

const Heading = ({ results }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="flex justify-center items-center">
        {results && results['source'] && (
          <a href={results['source'].binary.package.link} target="_blank" rel="noreferrer">
            <button className="bg-transparent  flex items-center justify-center  border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[191px] h-[48px] rounded-2xl gradient-border">
              Source Code
              <span className="ml-2">
                <DownloadIcon />
              </span>
            </button>
          </a>
        )}
      </div>
    </section>
  )
}

export default Heading
