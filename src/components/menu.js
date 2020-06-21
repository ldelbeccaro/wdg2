import React, { useContext, useRef, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/menu.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"

const Menu = ({ pages }) => {
  const { colorBg, setBackground } = useContext(BackgroundContext)
  const { navHeight, lastPageContent, setMenu } = useContext(MenuContext)
  const navRef = useRef(null)

  useEffect(() => setMenu({ height: getNavHeight() }), [])

  const currentPage = pages.find(
    page => window.location.pathname === page.node.frontmatter.url
  )
  const pageUrl = currentPage ? currentPage.node.frontmatter.url : "/"

  const getNavHeight = e => {
    const target = e
      ? e.target
      : document.querySelector(`.nav-item[href="${pageUrl}"]`)

    if (!target) {
      return `0px`
    }
    if (target === target.parentNode.lastChild) {
      return `100%`
    }
    const targetY = target.getBoundingClientRect().bottom
    const navY = navRef.current.getBoundingClientRect().y
    return `${targetY - navY}px`
  }

  return (
    <div
      className="nav"
      ref={navRef}
      onMouseLeave={() => {
        setMenu({ height: getNavHeight(), content: lastPageContent })
        setBackground({ colorBackground: "#fff" })
      }}
    >
      <div
        className="selected-nav-line"
        style={{
          backgroundColor: colorBg,
          height: navHeight,
        }}
      ></div>
      {pages
        .map(page => page.node.frontmatter)
        .map(page => (
          <Link
            className="nav-item"
            key={page.url}
            to={page.url}
            onMouseEnter={e => {
              setMenu({ height: getNavHeight(e), content: Animation })
              setBackground({ colorBackground: page.color })
            }}
          >
            {page.title}
          </Link>
        ))}
    </div>
  )
}

Menu.propTypes = {
  pages: PropTypes.array,
}

Menu.defaultProps = {
  pages: [],
}

export default Menu
