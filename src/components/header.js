import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import "../styles/header.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"

const Header = ({ siteTitle }) => {
  const { navShowing, lastPageContent, setMenu } = useContext(MenuContext)
  const { colorBg, lastColorBg, setBackground } = useContext(BackgroundContext)
  return (
    <header>
      <h1>
        <Link to="/" style={{ color: navShowing ? colorBg : `#fff` }}>
          {siteTitle}
        </Link>
      </h1>
      <div
        id="menu"
        onClick={() => {
          if (navShowing) {
            setMenu({ showing: !navShowing, content: lastPageContent })
          } else {
            setMenu({ showing: !navShowing, content: Animation })
            setBackground({ colorBackground: lastColorBg })
          }
        }}
      >
        menu
      </div>
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
