import React, { useContext, useRef, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/menu.styl"

import MenuContext from "../contexts/MenuContext"

const Menu = ({ pages }) => {
  const { navHeight, navColor, setMenu } = useContext(MenuContext)
  const navRef = useRef(null)
  const pageUrl = pages.find(page =>
    window.location.pathname.includes(page.node.frontmatter.url)
  ).node.frontmatter.url

  useEffect(() => setMenu({ height: getNavHeight() }), [])

  const getNavHeight = e => {
    const target = e
      ? e.target
      : document.querySelector(`.nav-item[href="${pageUrl}"]`)

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
      onMouseLeave={() => setMenu({ height: getNavHeight() })}
    >
      <div
        className="selected-nav-line"
        style={{
          width: `1px`,
          backgroundColor: navColor,
          height: navHeight,
          position: `absolute`,
          left: `-1px`,
          top: 0,
        }}
      ></div>
      {pages
        .map(page => page.node.frontmatter)
        .map(page => (
          <Link
            className="nav-item"
            key={page.url}
            to={page.url}
            onMouseOver={e => setMenu({ height: getNavHeight(e) })}
            onClick={() => console.log("go to page.component")}
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
