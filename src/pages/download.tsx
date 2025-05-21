import React, { useEffect } from "react"
import { navigate } from "gatsby"

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { graphql } from "gatsby"
import vendors from "../json/marketplace.json"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import Seo from "../components/Seo"
import { capitalize } from "../util/capitalize";
import Support from "../components/WorkingGroup/Support";

const DownloadPage = ({ location }) => {
  let link, checksum, os, arch, type, version, vendor, postDownload
  if (location.state && location.state.link) {
    link = location.state.link
    checksum = location.state.checksum
    os = location.state.os
    arch = location.state.arch
    type = location.state.pkg_type
    version = location.state.java_version
    vendor = location.state.vendor ? location.state.vendor : "Adoptium"
    for (const vendordata of vendors) {
      if (vendordata.name === vendor) {
        postDownload = vendordata.postDownload
      }
    }
  }

  // Send a custom event to Google Analytics
  typeof window !== "undefined" &&
    link &&
    window.gtag &&
    window.gtag("event", "download", {
      event_category: "download",
      link: link,
      event_label: `${os}-${arch}-${type}`,
      java_version: version,
      vendor: vendor,
    })

  const shouldRedirect = !link

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/temurin/releases")
    }
  }, [])

  if (shouldRedirect) {
    return null
  }

  return (
    <Layout>
      <PageHeader
        title="Thank you for your download!"
        subtitle="Download Success"
        description={
          <>
            <meta httpEquiv="refresh" content={`0; url=${link}`} />
            {link &&
              (vendor === "Adoptium" ? (
                <>
                  You are downloading an Eclipse Temurin build, the open-source
                  community build from the Eclipse Adoptium Working Group. If the
                  download doesn't start in a few seconds, please{" "}
                  <span className="text-primary underline !underline-offset-[1px]">
                    <a href={link}>click here</a>
                  </span>{" "}
                  to start the download.
                </>
              ) : (
                <>
                  You are downloading a build from <strong>{capitalize(vendor)}</strong>,
                  a member of the Eclipse Adoptium Working Group. If the download
                  doesn't start in a few seconds, please{" "}
                  <span className="text-primary underline !underline-offset-[1px]">
                    <a href={link}>click here</a>
                  </span>{" "}
                  to start the download.
                </>
              ))}
          </>
        }
      />
      <ImageText
        title="What to do now?"
        description="You have successfully downloaded Temurin. For more details on usage and configuration, please take a look at our Installation Guide."
        linkText="Installation Guide"
        link="/installation"
      />
      <Support />
    </Layout>
  )
}

export default DownloadPage

export const Head = () => <Seo title="Thank You" />

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
