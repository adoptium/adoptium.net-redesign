import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ImageText from "../components/ImageText"
import Documentation from "../components/Early-Access-Build/Documentation"
import AllReleases from "../components/Early-Access-Build/AllReleases"

const earlybuild = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Early Access Builds"
          title="Early Access Builds"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        />
        <AllReleases />
        <ImageText
          className={
            "flex flex-col md:flex-row  w-full items-center text-center md:text-start"
          }
          title="A short title for API information"
          description="Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus diam turpis. Massa posuere ornare dignissim orci consequat."
          description2={undefined}
          linkText="Get Support"
          link={undefined}
          icon={undefined}
          linkText2="Get Support"
        />

        <Documentation />
      </Layout>
    </>
  )
}

export default earlybuild
