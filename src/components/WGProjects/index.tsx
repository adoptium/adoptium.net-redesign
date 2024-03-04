import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { RedIcon } from "../Common/Icon"
import CommonHeading from "../Common/CommonHeading"

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
    <div className="bg-blue py-16 sm:pt-32 pb-20">
      <div className=" max-w-[1264px] mx-auto px-6 ">
        <div className="max-w-[700px] mx-auto">
          <CommonHeading
            title="Other projects"
            description={
              "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
            }
            className={"text-center "}
          />
        </div>
        <div className="mt-16 mb-8 flex justify-center gap-6 flex-wrap ">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" w-full  p-8 flex justify-between  flex-col  max-w-[389px] newscard-2 h-[420px] md:h-[520px]  bg-[#1A0D35] "
            >
              <img
                src={`/images/projects/${project.imagePath}`}
                alt={`${project.title} logo`}
                className="w-[140px]"
              />
              <div className=" flex-col justify-center items-start gap-2">
                <div className="justify-start items-center gap-3 inline-flex">
                  <RedIcon />
                  <p className="text-rose-600 mb-0 text-base leading-6 font-bold">
                    Overline
                  </p>
                </div>
                <h2 className="text-white text-xl md:text-3xl leading-8 md:leading-10 font-semibold mt-2">
                  {project.title}
                </h2>
                <Link to={project.link} placeholder={undefined}>
                  <button className="bg-transparent border-2 mt-8 sm:mt-10 border-pink-500/0 text-whit text-base leading-6 font-bold w-[148px] h-[48px] rounded-2xl gradient-media-btn">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WGProjects
