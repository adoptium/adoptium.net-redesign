import React, { useState } from "react"

import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import UsingTemurin from "../components/About/UsingTemurin"
import OurMamberWapper from "../components/Common/OurMamberWapper"
import OurMamberButton from "../components/Business-Benefits2/OurMamberButton"
import Testimonials from "../components/Testimonials"
import ContactUs from "../components/ContactUs"

const benefits = () => {
  const [active, setActive] = useState(1)
  return (
    <div>
      <Layout>
        <NavBar />
        <div className=" ">
          <PageHeader
            title="How Temurin can benefit your business"
            subtitle="Business Benefits"
            description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          />
        </div>
        <ImageText
          title="More than 10 years' experience, and a focus firmly on your future"
          description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
          linkText="Learn More"
          link="#"
        />
        <UsingTemurin />
        <div className="py-10 max-w-[1264px] mx-auto">
          <div className="max-w-[700px] mx-auto">
            <h3 className="text-[36px] sm:text-[42px] font-hanken leading-[56px] text-center">
              Our Partners
            </h3>
            <p className="text-[16px] font-hanken leading-[24px] text-[#C4BFCE] text-center mt-3">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java runtime binaries that are enterprise-ready and
              Java SE TCK-tested for general use in the Java ecosystem.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-[15px] md:mt-[64px]  ">
            <OurMamberButton active={active} setActive={setActive} />
            {active === 1 && <OurMamberWapper />}
            {active === 2 && <OurMamberWapper />}
            {active === 3 && <OurMamberWapper />}
            {active === 4 && <OurMamberWapper />}
            {active === 5 && <OurMamberWapper />}
            {active === 6 && <OurMamberWapper />}
            <div className="flex justify-center flex-wrap items-center gap-5 md:gap-14 mt-10">
              <p className="text-[20px] font-hanken leading-[28px] text-white my-0 text-center">
                Are you interested in becoming a member?
              </p>
              <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
                Become a Member
              </button>
            </div>
          </div>
        </div>
        <Testimonials />
        <ImageText
          title="More than 10 years' experience, and a focus firmly on your future"
          description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
          linkText="Learn More"
          link="#"
        />

        <ContactUs title="Contact us about how Temurin can help your business" />
      </Layout>
    </div>
  )
}

export default benefits
