import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import DocumentationCategoryList from "../components/Documentation/DocumentationCategoryList"
import TryDocumentation from "../components/Resource-Directory/TryDocumentation"
import FAQ from "../components/FAQ"

const resourcedirectory = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Resource Directory"
          title="Resource Directory"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <div className="md:pt-14">
          <DocumentationCategoryList />
        </div>
        <TryDocumentation />
        <div className="h-[1px] my-8 md:mt-14 md:mb-8 w-full bg-[#3E3355]"></div>
        <FAQ className={"!pb-14 !pt-12 md:!py-32"} />
      </Layout>
    </>
  )
}

export default resourcedirectory
