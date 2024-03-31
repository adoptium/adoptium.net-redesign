import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import PolicyTerm from "../components/Privacy-Policy/PolicyTerm"
import PageTitle from "../components/Terms-of-use/PageTitle"
const termsofuse = () => {
  return (
    <>
      <NavBar />
      <PageTitle />
      <PolicyTerm />
      <Footer />
    </>
  )
}

export default termsofuse
