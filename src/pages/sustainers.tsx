import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import UiMobileScroll from "../components/UiVirtualScroll/mobile"
import UiVirtualContent from "../components/UiVirtualScroll/UiVirtualContent"
import SavingsCalculator from "../components/SavingsCalculator"
import Logos, { LogoType } from "../components/Logos"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const Sponsors = () => {
  const data = [
    {
      title: "Diamond Benefits",
      description: (
        <ul className="text-left lg:list-disc lg:ml-4">
          <li>Logo (max size: 400x179) on our Sustainers page</li>
          <li>Logo location: top section, rotating placement in a row</li>
          <li>Use of the Diamond Sustainer logo for your site</li>
          <li>Joint press release with the Eclipse Foundation</li>
          <li>Listed in Eclipse Foundation Annual Reports</li>
          <li>Listed in all Adoptium Working Group press releases</li>
          <li>Sponsor a co-authored case study</li>
          <li>Media testimonial placement, spokesperson opportunities</li>
          <li>Speaking Opportunity at the Virtual Adoptium Summit</li>
        </ul>
      ),
      image: "diamond-layers.svg",
      subtext: {
        title: "Diamond",
        amount: "€100k/year",
      },
    },
    {
      title: "Platinum Benefits",
      description: (
        <ul className="text-left lg:list-disc lg:ml-4">
          <li>Logo (max size: 300x134) on our Sustainers page</li>
          <li>
            Logo location: upper-middle section, rotating placement in row
          </li>
          <li>Use of the Platinum Sustainer logo for your site</li>
          <li>Joint press release with the Eclipse Foundation</li>
          <li>Listed in Eclipse Foundation Annual Reports</li>
          <li>Listed in all Adoptium Working Group press releases</li>
          <li>Media testimonial placement, spokesperson opportunities</li>
        </ul>
      ),
      image: "platinum-layers.svg",
      subtext: {
        title: "Platinum",
        amount: "€75k/year",
      },
    },
    {
      title: "Gold Benefits",
      description: (
        <ul className="text-left lg:list-disc lg:ml-4">
          <li>Logo (max size: 223x100) on our Sustainers page </li>
          <li>Logo location: middle section, rotating placement in a row</li>
          <li>Use of the Gold Sustainer logo for your site</li>
          <li>Personal quote for your press release</li>
          <li>Listed in all Adoptium Working Group press releases</li>
          <li>Media testimonial placement, spokesperson opportunities</li>
        </ul>
      ),
      image: "gold-layers.svg",
      subtext: {
        title: "Gold",
        amount: "€50k/year",
      },
    },
    {
      title: "Silver Benefits",
      description: (
        <ul className="text-left lg:list-disc lg:ml-4">
          <li>Logo (max size: 150x67) on our Sustainers page</li>
          <li>
            Logo location: lower-middle section, rotating placement in a row
          </li>
          <li>Use of the Silver Sustainer logo for your site</li>
          <li>Media testimonial placement, spokesperson opportunities</li>
          <li>Listed in all Adoptium Working Group press releases</li>
        </ul>
      ),
      image: "silver-layers.svg",
      subtext: {
        title: "Silver",
        amount: "€30k/year",
      },
    },
    {
      title: "Bronze Benefits",
      description: (
        <ul className="text-left lg:list-disc lg:ml-4">
          <li>Logo (max size: 150x67) on our Sustainers page</li>
          <li>Logo location: lower section, rotating placement in a row</li>
          <li>Use of the Bronze Sustainer logo for your site</li>
          <li>Listed in all Adoptium Working Group press releases</li>
        </ul>
      ),
      image: "bronze-layers.svg",
      subtext: {
        title: "Bronze",
        amount: "€10k/year",
      },
    },
  ]

  const BecomeSustainer = props => (
    <div
      className={classNames(
        "flex flex-col md:flex-row gap-6 justify-center absolute items-center mt-[30px] md:-mt-[98px] w-full z-10",
        props.classes,
      )}
    >
      <a href="https://github.com/sponsors/adoptium" target="_blank" className="transform transition-transform duration-300 hover:scale-105">
        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg shadow-lg hover:shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
          Become an Individual Sustainer
        </button>
      </a>
      <Link to="/become-a-sustainer" className="transform transition-transform duration-300 hover:scale-105">
        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg border border-white/20 hover:border-white/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
          Become a Corporate Sustainer
        </button>
      </Link>
    </div>
  )

  const sustainerProgram = [
    {
      image: "temurin-light.png",
      description:
        "Runtime binaries High performance Cross-platform Open source licenses (GPLv2 + CE) Spec compliant",
    },
    {
      image: "aqavit-light.png",
      description:
        "Verification program, running a large pool of tests Assuring security durability, scalability, and performance requirements",
    },
    {
      image: "emt4j.svg",
      description:
        "This migration toolkit helps organizations with the migration from Java 8 to 11+",
    },
    {
      image: "mission-control.svg",
      description:
        "Low-overhead monitoring and management of running Java applications",
    },
  ]

  const keyInitiatives = [
    {
      header: "Enhanced Security",
      image: "security.svg",
      description:
        "Contribute to rigorous security practices, including regular audits and vulnerability management. Your support ensures the continuation of our Secure Development efforts, encompassing SBOM, reproducible builds, SLSA, OpenChain Conformance, security audits, and vulnerability reports.",
    },
    {
      header: "Faster Release Cycles",
      image: "release.svg",
      description:
        "Ensure your Java environments stay up-to-date with the latest advancements by sponsoring additional infrastructure services. This support will enable us to publish feature and CPU releases within our ambitious delivery targets, keeping your systems at the forefront of innovation.",
    },
    {
      header: "Ready-to-deploy Builds",
      image: "deploy.svg",
      description:
        "Ensure access to Java versions tailored to your specific architecture and operating system needs. Get the precise build for your software services and save money by avoiding the costs of creating your own builds. Your funding allows us to deliver across a broad range of platforms and architectures",
    },
    {
      header: "Sustained Innovation",
      image: "innovation.svg",
      description:
        "Support the continuous improvement of Temurin and other Adoptium projects. We are leaders in Secure Development, Quality Assurance, Migration Tools, and many other areas where we have been developing bleeding-edge, innovative solutions. Your funding allows us to continue to develop improvements that benefit the entire Java ecosystem.",
    },
    {
      header: "Quality Testing",
      image: "testing.svg",
      description:
        "Help us maintain and optimize our testing infrastructure across all necessary platforms and versions, ensuring robust and reliable releases. Your funding allows us to assess and include tests that your organization cares about and proactively discover and mitigate defects before they land in your domain.",
    },
    {
      header: "Community Development and Engagement",
      image: "community.svg",
      description:
        "Support the growth of a diverse and vibrant Java community. Your sponsorship helps maintain and enhance Adoptium projects, ensuring a stable, scalable, and interoperable Java ecosystem. Additionally, you will have the opportunity to support events and marketing initiatives and actively participating in community activities, spreading awareness and fostering collaboration.",
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      keyInitiatives.forEach((_, i) => {
        const container = document.getElementById(`card-container-${i}`)
        const checkbox = document.getElementById(
          `toggle-${i}`,
        ) as HTMLInputElement

        if (container && !container.contains(event.target as Node)) {
          if (checkbox && checkbox.checked) checkbox.checked = false
        }
      })
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [keyInitiatives])

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0d0129]/80 via-[#410170]/60 to-[#0d0129]/80"></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#ff1464]/10 filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#410170]/20 filter blur-[120px]"></div>
        </div>
        <PageHeader
          title="Join us in strengthening the future of Eclipse Temurin"
          subtitle="Become a Corporate Sustainer"
          className={"max-w-[1016px] mx-auto relative z-10"}
        />
        <BecomeSustainer />
      </div>

      <div className="w-full flex flex-col justify-center items-center pt-[240px] md:pt-[120px]">
        <div className="w-full flex flex-col justify-center items-center relative">
          <div className="w-full ">
            <div className="absolute z-[-1] w-full h-[20px] bottom-0 right-0 bg-[#410170] shadow-[0_0_400px_rgba(65,1,112,1)] rounded-full blur-[400px]"></div>
            <div className="absolute z-[-1] w-full h-[20px] bottom-0 right-0 bg-[#B62987] shadow-[0_0_400px_rgba(182,41,135,1)] rounded-full blur-[400px]"></div>
            <div className="absolute z-[-1] w-full h-[20px] bottom-0 right-0 bg-[#FE8492] shadow-[0_0_400px_rgba(254,132,146,1)] rounded-full blur-[400px]"></div>
          </div>
          <div className="w-full max-w-[1180px] px-6 py-8 relative">
            <div className="absolute -left-full -right-full -bottom-20 -z-10">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff1464]/20 to-transparent"></div>
            </div>
            <h2 className="text-center text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900 mb-6">
              Eclipse Temurin Sustainer Program
            </h2>
            <p className="text-center text-[#c4bfce] px-4 py-6 max-w-[900px] mx-auto text-lg leading-relaxed">
              The Eclipse Temurin Sustainer Program invites enterprises to
              invest in the long-term sustainment of Eclipse Temurin and other
              Adoptium projects. By becoming a Sustainer, your company ensures
              that Temurin remains the industry's leading community-driven open
              source JDK for mission-critical Java workloads. This program
              supports the vendor-neutral development of runtimes and
              development kits, infrastructure and tools, quality assurance,
              enhanced security practices, community engagement, and more.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1180px] px-4 mb-16">
            {sustainerProgram.map(({ image, description }, index) => (
              <div 
                key={index}
                className="max-w-[250px] w-full flex flex-col justify-start items-center bg-gradient-to-b from-[#1e1133]/40 to-[#0d0129]/40 backdrop-blur-sm rounded-xl border border-[#39314a]/50 p-6 transform transition-all duration-300 hover:translate-y-[-8px] hover:border-[#ff1464]/30 hover:shadow-lg hover:shadow-[#ff1464]/10"
              >
                <div className="flex flex-col justify-center items-center gap-[6px] bg-white rounded-2xl w-[140px] h-[140px] mb-6 shadow-lg">
                  <img
                    src={`/images/${image}`}
                    alt="project logo"
                    className="w-[110px] mb-0"
                  />
                </div>
                <p className="text-center text-[#c4bfce] text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-[#39314a] mt-[60px] pt-[40px] md:pt-[80px] w-full">
            <h2 className="text-center text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
              How Your Support Fuels Key Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full item-center mt-10 p-4 mx-auto max-w-[1180px]">
              {keyInitiatives.map(({ image, header, description }, i) => (
                <div
                  className="relative max-w-[382px] w-full"
                  id={`card-container-${i}`}
                  key={i}
                >
                  <input
                    type="checkbox"
                    id={`toggle-${i}`}
                    className="peer hidden"
                  />
                  <div
                    role="button"
                    className="relative group h-[212px] w-full border-[1px] border-[#39314a] hover:border-[#ff1464]/40 rounded-[20px] cursor-pointer overflow-visible transition-all duration-300 lg:peer-checked:border-[#ff1464]/70 lg:peer-checked:border-b-0 lg:peer-checked:rounded-bl-none lg:peer-checked:rounded-br-none bg-gradient-to-b from-[#1e1133]/60 to-[#0d0129]/60 backdrop-blur-sm shadow-lg hover:shadow-[#ff1464]/5"
                  >
                    <label htmlFor={`toggle-${i}`}>
                      <div className="flex flex-col justify-center items-center gap-6 h-full cursor-pointer p-6">
                        <div className="bg-gradient-to-br from-[#281645] to-[#39194d] p-4 rounded-full">
                          <img
                            src={`/images/initiatives/${image}`}
                            className="mb-0 w-16 h-16"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-2xl font-medium text-center px-4 text-white">
                          {header}
                        </h3>
                      </div>
                    </label>
                  </div>
                  <div className="hidden lg:peer-checked:block absolute backdrop-blur-xl h-auto min-h-[236px] top-full left-0 w-full mt-[-1px] border-[1px] border-t-0 border-[#ff1464]/70 rounded-b-[20px] z-10 p-6 bg-gradient-to-b from-[#1e1133]/60 to-[#0d0129]/60 shadow-lg shadow-[#ff1464]/10">
                    <p className="text-white text-sm px-4 text-center leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[16px] text-[#c4bfce] p-6 max-w-[900px] text-center mx-auto mt-6 leading-relaxed">
              Join the Eclipse Temurin Sustainer Program and play a crucial role
              in maintaining the vitality and reliability of the world's
              fastest-growing open source Java SE runtime. Your support
              accelerates our initiatives, driving greater impact and innovation
              within the Java ecosystem.
            </p>
          </div>
        </div>
        <div className="bg-[#0d0129] w-full py-[95px] relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-[#410170]/10 filter blur-[150px]"></div>
            <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ff1464]/5 filter blur-[120px]"></div>
          </div>
          <div className="max-w-[1180px] mx-auto w-full relative z-10">
            <div className="w-full flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#1e1133]/30 to-[#0d0129]/30 backdrop-blur-sm rounded-2xl border border-[#39314a]/30">
              <h2 className="text-left max-w-[855px] md:text-center text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
                Calculate your savings and Invest in Temurin's Future
              </h2>
              <p className="text-[#ff1464] max-w-[740px] text-[20px] text-center font-bold mt-10 mb-6">
                The average company* using Eclipse Temurin saves more than $1.6M
                annually. Isn't it time you invest in sustaining your savings?
              </p>
              <p className="text-xs text-[#c4bfce] my-5">
                *Self-reported number of employees, n = 211
              </p>
              <SavingsCalculator />
              <p className="text-[#c4bfce] max-w-[900px] text-center mt-8 leading-relaxed">
                With the recent increase in licensing costs for paid Java SE
                options, we've seen Temurin downloads surge—from over 75M in
                2023 to over 250M by the end of 2023, and doubling again to more
                than 500M by the end of 2024. This growth strongly indicates a
                significant transition away from paid Java options toward
                open-source solutions like Temurin. If your organization has
                made this migration, you've likely experienced significant cost
                savings. Dedicate a portion of your savings to Temurin to invest
                in your corporate software supply chain by ensuring Temurin's
                long-term viability, enhance security, and accelerate faster
                releases for the Java community.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1180px] p-4">
          <div className="mb-16 mt-8 relative">
            <div className="absolute -left-full -right-full -top-8 -z-10">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff1464]/20 to-transparent"></div>
            </div>
            <h2 className="text-center text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900 mb-10 mt-8">
              Sustainer Levels
            </h2>
            <div className="p-4">
              <UiMobileScroll data={data} />
              <div className="lg:block hidden open-animation-wrapper">
                <UiVirtualContent data={data} />
              </div>
            </div>
            <BecomeSustainer classes="md:mt-10 md:mx-auto" />
          </div>
          
          <h2 className="text-center text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900 mb-8 mt-40 relative">
            <div className="absolute -left-full -right-full -top-20 -z-10">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff1464]/20 to-transparent"></div>
            </div>
            Temurin's Sustainers
          </h2>
          <div className="p-4 bg-gradient-to-b from-[#1e1133]/20 to-[#0d0129]/20 backdrop-blur-sm rounded-xl border border-[#39314a]/30">
            <Logos
              members={LogoType.SPONSOR}
              title=""
              description="Adoptium is proud to receive financial donations both one-off and regularly from the following companies."
            />
            <Logos
              members={LogoType.INFRA}
              title=""
              description="The Adoptium Working Group collaborates with the following companies who contribute various kinds of cloud and physical hardware."
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsors

export const Head = () => <Seo title="Sponsor Us" />

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
