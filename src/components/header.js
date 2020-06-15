import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.styl"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Laura & Ashkon`,
}

export default Header
