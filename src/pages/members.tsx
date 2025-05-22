import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import ContactUs from "../components/ContactUs"
import Logos, { LogoType } from "../components/Logos"
import { scrollToSection } from "../util/scrollToView"

const Members = () => {
  return (
    <Layout>
      <PageHeader
        title="Who we work with"
        subtitle="Our Members"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full py-6 md:py-8 px-4">
        <Link to="/join" className="w-full sm:w-auto">
          <button className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg shadow-lg hover:shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            Become a Member
          </button>
        </Link>
        <button
          onClick={e => scrollToSection(e, "strategic-sec")}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg border border-white/20 hover:border-white/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Our Members
        </button>
      </div>
      <div className="w-full px-3 pt-2 pb-4 mb-4">
        <div className="max-w-4xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 md:space-x-10 whitespace-nowrap justify-center py-2 min-w-max">
            <a href="#strategic-sec">
              <span
                className="px-3 py-2 text-base md:text-lg font-medium leading-6
                  outline-none hover:text-white hover:border-b-2
                  hover:border-[#ff1464] text-[#8a809e] border-b-2
                  border-transparent cursor-pointer transition-all duration-200 ease-in-out"
              >
                Strategic Members
              </span>
            </a>
            <a href="#enterprise-sec">
              <span
                className="px-3 py-2 text-base md:text-lg font-medium leading-6
                  outline-none hover:text-white hover:border-b-2
                  hover:border-[#ff1464] text-[#8a809e] border-b-2
                  border-transparent cursor-pointer transition-all duration-200 ease-in-out"
              >
                Enterprise Members
              </span>
            </a>
            <a href="#participant-sec">
              <span
                className="px-3 py-2 text-base md:text-lg font-medium leading-6
                  outline-none hover:text-white hover:border-b-2
                  hover:border-[#ff1464] text-[#8a809e] border-b-2
                  border-transparent cursor-pointer transition-all duration-200 ease-in-out"
              >
                Participant Members
              </span>
            </a>
          </div>
        </div>
      </div>
      <Logos
        sectionId="strategic-sec"
        members={LogoType.STRATEGIC}
        title="Strategic Members"
        description="Companies that use Eclipse Temurin in production."
      />
      <Logos
        sectionId="enterprise-sec"
        members={LogoType.ENTERPRISE}
        title="Enterprise Members"
        description="Companies that use Eclipse Temurin in production."
      />
      <Logos
        sectionId="participant-sec"
        members={LogoType.PARTICIPANT}
        title="Participant Members"
        description="Companies that use Eclipse Temurin in production."
      />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 my-12 px-4">
        <p className="text-[20px] leading-[28px] text-white my-0 text-center">
          Are you interested in becoming a member?
        </p>
        <Link to="/join" className="w-full sm:w-auto">
          <button className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg shadow-lg hover:shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            Become a Member
          </button>
        </Link>
      </div>
      <ContactUs
        title="Speak to our team today" 
        buttontitle="Contact Us" 
        linkTo="/join" />
    </Layout>
  )
}
export default Members

export const Head = () => <Seo title="Our Members" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
