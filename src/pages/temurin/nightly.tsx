import React, { useState } from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { FaArrowCircleRight } from "react-icons/fa"

import { Link } from "../../components/Link"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import VersionSelector from "../../components/VersionSelector"
import ChecksumModal from "../../components/ChecksumModal"
import TemurinNightlyTable from "../../components/TemurinNightlyTable"
import { getAssetsForVersion } from "../../hooks"
import LinkText from "../../components/LinkText"
import PageHeader from "../../components/PageHeader"

const TemurinNightly = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentChecksum, setCurrentChecksum] = useState("")

  const openModalWithChecksum = checksum => {
    setCurrentChecksum(checksum)
    setModalOpen(true)
  }

  return (
    <Layout>
      <PageHeader
        title="Nightly Builds"
        subtitle="Early Access"
        description="Get the latest nightly builds for testing and development purposes."
      />
      
      <div className="max-w-[1264px] mx-auto px-6 py-8">
        <div className="bg-[#26193F] rounded-2xl p-6 md:p-8 mb-10">
          <div className="prose prose-invert max-w-none">
            <Trans 
              i18nKey="nightly.builds.be.aware" 
              defaults="Please be aware that this archive contains intermediate builds created as a development step towards a <fullReleaseLink>full release</fullReleaseLink>. Intermediate builds are ephemeral, and may disappear in the future."
              components={{
                fullReleaseLink: <LinkText href="/temurin/releases" />
              }}
            />
            
            <h4 className="mt-6 mb-3 text-lg font-medium">
              <Trans i18nKey="nightly.builds.notice.title" defaults="The following notice applies to intermediate builds:" />
            </h4>
            
            <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">
              <Trans 
                i18nKey="nightly.builds.quoted.notice" 
                defaults="This is an intermediate build made available for testing purposes only. The code is untested and presumed incompatible with the Java SE specification.
                You should not deploy or write to this code, but instead use the tested and certified Java SE compatible version of the code.
                Redistribution of this build must retain this notice." 
              />
            </blockquote>
            
            <div className="bg-amber-900/30 border-l-4 border-amber-600 p-4 mt-6">
              <p className="text-amber-400 font-medium">
                <Trans 
                  i18nKey="nightly.builds.unsupported.in.production" 
                  defaults="These builds are unsupported and not for use in production." 
                />
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              to="/temurin/releases" 
              className="rounded-[80px] bg-[#FF1464] border transition duration-300 ease-in-out hover:bg-transparent hover:text-[#FF1464] border-[#FF1464] flex items-center justify-center gap-3 px-6 py-3 text-white font-bold leading-6 text-base"
            >
              <Trans>Latest Releases</Trans> <FaArrowCircleRight />
            </Link>
            {/* <Link 
              to="/temurin/archive" 
              className="rounded-[80px] bg-transparent border-2 border-[#3E3355] hover:border-[#FF1464] hover:text-[#FF1464] transition duration-300 flex items-center justify-center gap-3 px-6 py-3 text-white font-bold leading-6 text-base"
            >
              <Trans>Release Archive</Trans> <FaArrowCircleRight />
            </Link> */}
          </div>
        </div>

        <VersionSelector 
          updater={getAssetsForVersion} 
          releaseType="ea" 
          Table={props => <TemurinNightlyTable {...props} openModalWithChecksum={openModalWithChecksum} />} 
        />
        <ChecksumModal
          open={modalOpen}
          setOpen={setModalOpen}
          checksum={currentChecksum}
        />
      </div>
    </Layout>
  )
}

export default TemurinNightly

export const Head = () => <Seo title="Nightly Builds" />

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
