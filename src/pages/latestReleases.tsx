import CtaWrapper from "../components/Common/CtaWrapper"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import React, { useState } from "react"
import FAQ from "../components/FAQ"
import {
  AlibabaCloudIcon,
  CLoudIcon,
  DownloadIcon,
  MacIcon,
  MicrosoftAzureIcon,
  OperaIcon,
  RestApiIcon,
  WindowIcon,
} from "../components/Common/AppIcon"
import Buttons from "../components/LatestReleases/Buttons"
import OurMamberWapper from "../components/Common/OurMamberWapper"
import ButtonContent from "../components/LatestReleases/ButtonContent"
import CommonHeading from "../components/Common/CommonHeading"
import { LinuxIcon } from "../components/Common/Icon"

const latestReleases = () => {
  const [active, setActive] = useState(1)
  const LibericaMethod = [
    {
      icon: <OperaIcon />,
      title: "Liberica runtime container + Alpaquita",
      buttons: ["Download"],
    },
    {
      icon: <MicrosoftAzureIcon />,
      title: "Liberica JDK Containers",
      buttons: ["Docker Hub", "GHCR", "MCR"],
    },
    {
      icon: <LinuxIcon />,
      title: "Linux Repositories",
      buttons: ["YUM", "APT", "Zypper", "APK"],
    },
    {
      icon: <AlibabaCloudIcon />,
      title: "Package Managers",
      buttons: ["SDKMAN", "Brew", " SCOOP", "winget"],
    },
    {
      icon: <CLoudIcon />,
      title: "Clouds",
      buttons: ["Azure"],
    },
    {
      icon: <RestApiIcon />,
      title: "REST Discovery API",
      buttons: ["Explore"],
    },
  ]
  return (
    <div>
      <Layout>
        <NavBar />
        <PageHeader
          title={"Download Liberica JDK"}
          subtitle={"Latest Relseases"}
          description={
            "Pick a version, package type, JDK/JRE, and download the binaries."
          }
        />
        <section className="py-16">
          <div className="w-full flex flex-col items-start justify-start sm:items-center sm:justify-center mt-[15px] md:mt-[64px]  ">
            <Buttons active={active} setActive={setActive} />
            {active === 1 && <ButtonContent />}
            {active === 2 && <ButtonContent />}
            {active === 3 && <ButtonContent />}
            {active === 4 && <ButtonContent />}
            {active === 5 && <ButtonContent />}
          </div>
        </section>
        <section className="pt-16 pb-32 ">
          <h2 className="text-center text-4xl mb-10 font-semibold md:text-5xl leading-[116%] ">
            Latest Temurin
          </h2>
          <div className="flex justify-center items-center">
            <button className="bg-transparent  flex items-center justify-center  border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[191px] h-[48px] rounded-2xl gradient-border">
              Source Code{" "}
              <span className="ml-2">
                <DownloadIcon />
              </span>
            </button>
          </div>
          <CtaWrapper />
        </section>
        <section className="py-32 bg-[#0E002A] px-6">
          <CommonHeading
            title={"Other ways to install Liberica"}
            description={
              "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
            }
            className={"text-center max-w-[680px] mx-auto"}
          />
          <div className="mt-16">
            <div className=" justify-between max-w-[1064px] mx-auto grid  gap-8 md:gap-12 w-full grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
              {LibericaMethod.map((method, index) => (
                <div className="flex gap-4 max-w-[366px] xl:max-w-[322px]">
                  <span className="p-6 rounded-full cursor-pointer flex justify-center items-center w-fit bg-[#2B1A4F] border border-[#5A4D76]">
                    {method.icon}
                  </span>
                  <div>
                    <h4 className="max-w-[270px] text-xl font-normal xl:max-w-[226px]">
                      {method.title}
                    </h4>
                    <div className="flex gap-2 mt-2 ">
                      {method.buttons.map((button, buttonIndex) => (
                        <button
                          key={buttonIndex}
                          className=" text-[#FF1464] text-sm font-normal border-b-[1px] border-[#FF1464] "
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FAQ />
      </Layout>
    </div>
  )
}

export default latestReleases
