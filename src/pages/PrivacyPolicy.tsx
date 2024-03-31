import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import PageTitle from "../components/Privacy-Policy/PageTitle"
import PolicyTerm from "../components/Privacy-Policy/PolicyTerm"

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar />
      <PageTitle />
      <PolicyTerm />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
