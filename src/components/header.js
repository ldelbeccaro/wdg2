import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"

import "../styles/header.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"
import Welcome from "./welcome"

const Header = ({ siteTitle }) => {
  const {
    navShowing,
    lastPageContent,
    menuNavColor,
    setMenu,
    navRef,
  } = useContext(MenuContext)
  const { colorBg, lastColorBg, setBackground } = useContext(BackgroundContext)
  const [navMenuFontColor, setColor] = useState(
    typeof window !== `undefined` && window.innerWidth > 638
      ? menuNavColor
      : "#56504e"
  )

  useEffect(() => {
    if (navShowing) {
      setColor("#ffffff")
    } else if (typeof window !== `undefined` && window.innerWidth > 638) {
      setColor(menuNavColor || "#ffffff")
    } else {
      setColor("#56504e")
    }
  }, [menuNavColor, navShowing])

  const data = useStaticQuery(graphql`
    query HomeColorQuery {
      markdownRemark(fields: { slug: { eq: "/home/" } }) {
        frontmatter {
          color
        }
      }
    }
  `)

  const color = data.markdownRemark.frontmatter.color

  useEffect(() => {
    setBackground({
      colorBackground: color,
      lastColorBackground: color,
    })
  }, [])

  const onClickMenu = () => {
    if (navShowing) {
      setTimeout(() => {
        setMenu({ content: <div /> })
        navRef.setAttribute("style", "width: 0;")
      }, 0)

      setTimeout(() => {
        setMenu({ showing: !navShowing, content: lastPageContent })
        navRef.setAttribute("style", "")
      }, 500)
    } else {
      setMenu({ showing: !navShowing, content: Animation })
      setBackground({ colorBackground: lastColorBg })
    }
  }

  return (
    <header>
      <h1>
        <Link
          to="/"
          style={{ color: colorBg }}
          onClick={() => {
            setMenu({ showing: false, content: Welcome, currentPage: 'home' })
            setBackground({
              colorBackground: color,
              lastColorBackground: color,
            })
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        id="menu"
        style={{ color: navMenuFontColor }}
        onClick={onClickMenu}
        onKeyDown={e => {
          if (e.keyCode === 13) onClickMenu()
        }}
        role="link"
        tabIndex={0}
      >
        Menu
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
