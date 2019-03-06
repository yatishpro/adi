/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import "./layout.css"
import "../scss/main.scss";


import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import LatestNews from '../components/Latest-News/latestNews'

import { LanguageProvider, LanguageConsumer } from "../Context/contex"


class Layout extends Component {

  state = {
    menu: true,
    language: 'english'
};



menuHandler = () => {
  this.setState({
    menu: !this.state.menu
  })
};

languageChangeHandler = () => {
  this.setState({
    language: (this.state.language == 'english') ? 'kannada' : 'english'
  })
}


  render(){
    return(
      <LanguageProvider value={this.state.language}>

      <Header menu={this.state.menu} languageHandler={this.languageChangeHandler} menuHandler={this.menuHandler} />
      <LatestNews/>
      <main>{this.props.children}</main>
      <Footer/>

    </LanguageProvider>
    )
  }

}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
