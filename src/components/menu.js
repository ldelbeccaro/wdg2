import React, { useContext, useRef, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/menu.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

const Menu = ({ pages }) => {
  const { colorBg, lastColorBg, setBackground } = useContext(BackgroundContext)
  const { navShowing, navHeight, lastPageContent, setMenu } = useContext(
    MenuContext
  )
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
      className={`nav${navShowing ? `` : ` hidden`}`}
      ref={navRef}
      onMouseLeave={() => {
        setMenu({ height: getNavHeight() })
        setBackground({ colorBackground: lastColorBg })
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
            onClick={() => {
              setMenu({ showing: false, content: lastPageContent })
              setBackground({ lastColorBackground: page.color })
            }}
            onMouseEnter={e => {
              setMenu({ height: getNavHeight(e) })
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
