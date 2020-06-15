import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"

import "../styles/menu.styl"

const Menu = ({ pages }) => {
  const [navIndicatorHeight, setNavHeight] = useState(0)
  const navRef = useRef(null)

  const getNavHeight = e => {
    if (e.target === e.target.parentNode.lastChild) {
      return `100%`
    }
    const targetY = e.target.getBoundingClientRect().bottom
    const navY = navRef.current.getBoundingClientRect().y
    return targetY - navY
  }

  return (
    <div
      className="nav"
      ref={navRef}
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        padding: `40px`,
        paddingRight: `80px`,
        borderLeft: `1px solid #b1ab9f`,
        position: `relative`,
      }}
      onMouseLeave={() => setNavHeight(0)}
    >
      <div
        className="selected-nav-line"
        style={{
          width: `1px`,
          backgroundColor: `#151414`,
          height: navIndicatorHeight,
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
            onMouseOver={e => setNavHeight(getNavHeight(e))}
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
