import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageHeader from "../components/PageHeader"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import ContactUs from "../components/ContactUs"
import Logos, { LogoType } from "../components/Logos"

const Members = () => {
  return (
    <Layout>
      <PageHeader
        title="Who we work with"
        subtitle="Our Members"
        description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
      />
      <div className="flex gap-4 md:gap-8 items-center justify-center absolute w-full top-[571px]">
        <Link to="/join">
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out mt-8">
            Become a Member
          </button>
        </Link>
        <Link to="#">
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out mt-8">
            Our Members
          </button>
        </Link>
      </div>
      <div className="overflow-auto px-3 py-5 w-full md:w-auto">
        <h3 className="flex space-x-10 whitespace-nowrap  justify-center py-2">
          <a href="#strategic">
            <span
              className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
            >
              Strategic Members
            </span>
          </a>
          <a href="#enterprise">
            <span
              className="text-[16px] py-3 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
            >
              Enterprise Members
            </span>
          </a>
          <a href="#participant">
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
      <Logos
        members={LogoType.STRATEGIC}
        title="Strategic Members"
        description="Companies that use Eclipse Temurin in production."
      />
      <Logos
        members={LogoType.ENTERPRISE}
        title="Enterprise Members"
        description="Companies that use Eclipse Temurin in production."
      />
      <Logos
        members={LogoType.PARTICIPANT}
        title="Participant Members"
        description="Companies that use Eclipse Temurin in production."
      />
      <div className="flex justify-center flex-wrap items-center gap-5 md:gap-14 m-5">
        <p className="text-[20px] leading-[28px] text-white my-0 text-center">
          Are you interested in becoming a member?
        </p>
        <Link to="/join">
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
            Become a Member
          </button>
        </Link>
      </div>
      <ContactUs
        title="Speak to our team today"
        buttontitle="Become a member"
      />
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
