/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import "../../scss/main.scss";

import Auxs from "../../hoc/Auxs/auxs"
import Header from "../Header/header"
import Footer from "../Footer/footer"




const Layout = ({ children }) => {
  return(
    <Auxs>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </Auxs>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
