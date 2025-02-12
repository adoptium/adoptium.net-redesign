import React from "react"
import { Link } from "../Link"
import { RedIcon } from "../Common/Icon"

interface Project {
  title: string
  imagePath: string
  link: string
}

const projects: Project[] = [
  {
    title: "Eclipse Temurin™",
    imagePath: "temurin-project.svg",
    link: "/temurin",
  },
  {
    title: "Eclipse AQAvit",
    imagePath: "aqavit-project.svg",
    link: "/aqavit",
  },
  {
    title: "Eclipse Mission Control",
    imagePath: "mc-project.svg",
    link: "/jmc",
  },
]

const WGProjects = () => {
  return (
    <div className="bg-blue py-24 sm:py-28">
      <div className="mx-auto max-w-3xl md:max-w-7xl w-full px-6 xl:px-0">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-center text-2xl md:text-5xl font-semibold text-white md:leading-[56px] leading-[44px] mb-4">
            A short title about products
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="mt-6 max-w-2xl mb-0 text-base leading-6 text-grey text-center">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE TCK-tested
            for general use in the Java ecosystem.
          </p>
        </div>
        <div className="mt-16 mb-8 flex md:h-[30em] justify-around lg:justify-between flex-wrap lg:flex-nowrap gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="max-w-xl w-full h-full">
              <div className="bg-white/5 flex justify-between h-full flex-col p-8 xl:p-12 rounded-3xl border-2 border-white/50">
                <img
                  src={`/images/projects/${project.imagePath}`}
                  alt={`${project.title} logo`}
                  className="w-[140px]"
                />
                <div className="flex-col justify-center items-start gap-2">
                  <div className="justify-start items-center gap-3 inline-flex pt-4">
                    <RedIcon />
                    <p className="text-rose-600 mb-0 text-base leading-6 font-bold">
                      Overline
                    </p>
                  </div>
                  <h2 className="text-white text-xl md:text-3xl leading-8 md:leading-10 font-semibold mt-2">
                    {project.title}
                  </h2>
                  <Link to={project.link}>
                    <button className="bg-transparent border-2 mt-8 sm:mt-10 border-pink-500/0 text-whit text-base leading-6 font-bold w-[148px] h-[48px] rounded-2xl gradient-border">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WGProjects
