import React, { useState } from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import CommonHeading from "../components/Common/CommonHeading"
import OurMamberButton from "../components/Business-Benefits2/OurMamberButton"
import OurMamberWapper from "../components/Common/OurMamberWapper"
import OurMamberFooter from "../components/Business-Benefits2/OurMamberFooter"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import ContactUs from "../components/ContactUs"

const oursupportes = () => {
  const [active, setActive] = useState(1)
  return (
    <div>
      <Layout>
        <NavBar />
        <PageHeader
          subtitle="Business Benefits"
          title="Who we work with"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        />
        <div className="py-10 mt-12 max-w-[1264px] mx-auto">
          <div className="max-w-[700px] mx-auto ">
            <CommonHeading
              title="Our Members"
              description={
                "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
              }
              className={"text-center"}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-[15px] md:mt-[64px]  ">
            <OurMamberButton active={active} setActive={setActive} />
            {active === 1 && <OurMamberWapper />}
            {active === 2 && <OurMamberWapper />}
            {active === 3 && <OurMamberWapper />}
            {active === 4 && <OurMamberWapper />}
            {active === 5 && <OurMamberWapper />}
            {active === 6 && <OurMamberWapper />}
            <OurMamberFooter />
          </div>
        </div>
        <div className="my-6 md:my-20">
          <div className="max-w-[700px] mx-auto  ">
            <CommonHeading
              title="Our Sponsors"
              description={
                "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem. "
              }
              className={"text-center"}
            />
          </div>
          <OurMamberWapper />
        </div>
        <PowerOfTemurin />
        <ContactUs
          title="Contact us about how Temurin can help your business"
          className={" !pt-0 !mt-0 md:!mt-24"}
        />
      </Layout>
    </div>
  )
}

export default oursupportes
