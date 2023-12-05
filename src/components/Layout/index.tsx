/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Slice } from 'gatsby'

import "./layout.scss"
// import "../styles/latest.scss"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Layout = ({ children }) => {
  return (
    <>
      <Slice alias='navbar' />
      <main>{children}</main>
      <Slice alias='footer' />
    </>
  )
}

export default Layout