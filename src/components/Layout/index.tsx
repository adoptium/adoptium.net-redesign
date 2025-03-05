/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Slice } from "gatsby"

import Contributor from "../Contributors"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Layout = ({ children, page = "" }) => {
  return (
    <>
      <Slice alias="banner" />
      <Slice alias="navbar" />
      <main>{children}</main>
      {page !== "home" && <Contributor />}
      <Slice alias="footer" />
    </>
  )
}

export default Layout
