import React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import Buttons from "../components/LatestReleases/Buttons"
import { DownloadIcon } from "../components/Common/AppIcon"
import CtaWrapper from "../components/Common/CtaWrapper"
import LibericaMethod from "../components/Common/LibericaMethod"
import FAQ from "../components/FAQ"
import SelectorHeader from "../components/Common/SelectorHeader"

const nightlyBuilds = () => {
  const data = [
    {
      subtitle: "Java Version",
      title: "Java 20",
      options: ["Mac OS", "Mac OS 2", "Mac OS 3"],
    },
    {
      subtitle: "Release Version",
      title: "Any",
      options: ["aarch64", "aarch 2", "aarch 3"],
    },
    {
      subtitle: "Operating system",
      title: "Any",
      options: ["aarch64", "aarch 2", "aarch 3"],
    },
    {
      subtitle: "Architecture",
      title: "Any",
      options: ["aarch64", "aarch 2", "aarch 3"],
    },
    {
      subtitle: "Bitness",
      title: "Any",
      options: ["aarch64", "aarch 2", "aarch 3"],
    },
    {
      subtitle: "Package Type",
      title: "Any",
      options: ["aarch64", "aarch 2", "aarch 3"],
    },
  ]
  return (
    <div>
      <Layout>
        <NavBar />
        <PageHeader
          title={"Download Nightly"}
          subtitle={"Nightly Builds"}
          description={
            "Pick a version, package type, JDK/JRE, and download the binaries."
          }
        />
        <section className="py-16">
          <h2 className="text-center text-4xl mb-10 font-semibold md:text-5xl leading-[116%] ">
            Temurin Builds on 01/04/23
          </h2>
          <div className="flex justify-center items-center">
            <button className="bg-transparent  flex items-center justify-center  border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[191px] h-[48px] rounded-2xl gradient-border">
              Source Code{" "}
              <span className="ml-2">
                <DownloadIcon />
              </span>
            </button>
          </div>
          <div className="w-full hidden sm:flex  flex-col items-start justify-start sm:items-center sm:justify-center mt-[15px] md:mt-[64px]  ">
            <SelectorHeader data={data} />
          </div>
        </section>
        <section className="pb-32 ">
          <div className="w-full gap-4 px-6  justify-between max-w-[1264px] mx-auto items-center hidden sm:flex ">
            <div className="h-[1px] bg-[#3E3355] w-full "></div>
            <h5 className="whitespace-nowrap text-base font-normal  text-[#C4BFCE]">
              64 bit
            </h5>
            <div className="h-[1px] bg-[#3E3355] w-full "></div>
          </div>
          <CtaWrapper />
        </section>
        <LibericaMethod />
        <FAQ />
      </Layout>
    </div>
  )
}

export default nightlyBuilds
