import CtaWrapper from "../components/Common/CtaWrapper"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import React, { useState } from "react"
import FAQ from "../components/FAQ"
import { DownloadIcon } from "../components/Common/AppIcon"
import Buttons from "../components/LatestReleases/Buttons"
import ButtonContent from "../components/LatestReleases/ButtonContent"

import LibericaMethod from "../components/Common/LibericaMethod"

const latestReleases = () => {
  const [active, setActive] = useState(1)

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
        <LibericaMethod />
        <FAQ />
      </Layout>
    </div>
  )
}

export default latestReleases
