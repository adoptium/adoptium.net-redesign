import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ReleasingSelector from "../components/Early-Access-Build/ReleasingSelector"
import MarketPlaceAll from "../components/MarketPlace2.tsx/MarketPlaceAll"

const marketplace2 = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Marketplace"
          title="Adoptium® Marketplace"
          description="Java™ is the world's leading programming language and platform. The Adoptium Marketplace promotes high-quality, TCK certified and AQAvit verified runtimes for use across the Java ecosystem."
        />
        <MarketPlaceAll />
      </Layout>
    </>
  )
}

export default marketplace2
