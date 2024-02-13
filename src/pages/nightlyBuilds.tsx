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
import { RedIcon } from "../components/Common/Icon"

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
        <section className="my-16 px-6   max-w-[1264px] w-full mx-auto">
          <div className="bg-[#200E46]  p-6   lg:p-8 rounded-[24px] border border-[#2D1C51] ">
            <p className="text-base font-normal text-[#C4BFCE]">
              Please be aware that this archive contains intermediate builds
              created as a development step towards a full release. Intermediate
              builds are ephemeral, and may disappear in the future.The
              following notice applies to intermediate builds:“This is an
              intermediate build made available for testing purposes only. The
              code is untested and presumed incompatible with the Java SE
              specification. You should not deploy or write to this code, but
              instead use the tested and certified Java SE compatible version of
              the code. Redistribution of this build must retain this notice.”
            </p>
            <h4 className="flex gap-3 justify-start items-center px-4 py-3 rounded-[16px] mt-6 w-fit lg:mt-9  bg-[#360F49] text-[#FF1464]">
              <span>
                <RedIcon />
              </span>
              These builds are unsupported and not for use in production
            </h4>
          </div>
        </section>
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
          <div className="w-full px-6 xl:px-0 flex  flex-col items-start justify-start sm:items-center sm:justify-center mt-[15px] md:mt-[64px]  ">
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
