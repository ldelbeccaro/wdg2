import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import "../styles/header.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"
import Welcome from "./welcome"

const Header = ({ siteTitle }) => {
  const { navShowing, lastPageContent, setMenu } = useContext(MenuContext)
  const { colorBg, lastColorBg, setBackground } = useContext(BackgroundContext)
  return (
    <header>
      <h1>
        <Link
          to="/"
          style={{ color: navShowing ? colorBg : `#797474` }}
          onClick={() => setMenu({ showing: false, content: Welcome })}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        id="menu"
        onClick={() => {
          const nav = document.querySelector(".nav")

          if (navShowing) {
            setTimeout(() => {
              setMenu({ content: <div /> })
              nav.setAttribute("style", "width: 0; opacity: 0;")
            }, 0)

            setTimeout(() => {
              setMenu({ showing: !navShowing, content: lastPageContent })
              nav.setAttribute("style", "")
            }, 500)
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
