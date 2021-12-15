import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import DownloadDropdowns from "../components/DownloadDropdowns"

const DownloadPage = () => (
  <Layout>
    <Seo title="Downloads" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Download Eclipse Temurin</h1>
          <DownloadDropdowns versions="8,11,17"/>

        </div>
      </div>
    </section>
  </Layout>
)

export default DownloadPage
