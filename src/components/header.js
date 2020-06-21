import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import "../styles/header.styl"

import BackgroundContext from "../contexts/BackgroundContext"

const Header = ({ siteTitle }) => {
  const { colorBg } = useContext(BackgroundContext)
  return (
    <header>
      <h1>
        <Link to="/" style={{ color: colorBg }}>
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Laura & Ashkon`,
}

export default Header
