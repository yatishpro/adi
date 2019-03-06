import React from "react"

import Auxs from "../hoc/Auxs/auxs"
import SEO from "../components/Seo/seo"

const NotFoundPage = () => (
  <Auxs>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Auxs>
)

export default NotFoundPage
