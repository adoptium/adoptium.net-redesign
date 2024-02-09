import React from "react"

import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import UsingTemurin from "../components/About/UsingTemurin"
import OurMamber from "../components/Business-Benefits2/OurMamber"

const benefits = () => {
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
            <div className="overflow-auto px-3 py-2 w-full md:w-auto">
              <h3 className="flex space-x-10 whitespace-nowrap  justify-center py-2">
                <a href="#Strategic">
                  <span
                    className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Strategic Members
                  </span>
                </a>
                <a href="#Enterprise">
                  <span
                    className="text-[16px] py-3 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Enterprise Members
                  </span>
                </a>
                <a href="#Participant">
                  <span
                    className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                  outline-none hover:text-white hover:border-b
                  hover:border-[#ff1464] text-[#8a809e] border-b
                  border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Participant Members
                  </span>
                </a>
              </h3>
            </div>
            <OurMamber />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default benefits
