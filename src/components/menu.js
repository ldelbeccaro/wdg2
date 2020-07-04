import React, { useState, useContext, useRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"

import "../styles/menu.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

const Menu = ({ pages }) => {
  const [navHeight, setNavHeight] = useState(0)
  const { colorBg, lastColorBg, setBackground } = useContext(BackgroundContext)
  const { navShowing, lastPageContent, setMenu } = useContext(MenuContext)
  const navRef = useRef(null)

  useEffect(() => setNavHeight(getNavHeight()), [navShowing])

  const currentPage = pages.find(
    page => window.location.pathname === page.node.frontmatter.url
  )
  const pageUrl = currentPage ? currentPage.node.frontmatter.url : "/"
  const currentNavItem = document.querySelector(`.nav-item[href="${pageUrl}"]`)

  const getNavHeight = e => {
    const target = e ? e.target : currentNavItem
    console.log(target)

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
        setNavHeight(getNavHeight())
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
            onClick={e => {
              e.preventDefault()
              const target = e.target

              target.classList.add("selected")
              target.setAttribute("style", `color: ${page.color}`)
              setBackground({ lastColorBackground: page.color })
              document
                .querySelector(`.nav-item[aria-current="page"]`)
                .setAttribute("style", "color: #8c8c8c;")

              setTimeout(() => {
                setMenu({ showing: false, content: <div /> })
              }, 500)

              setTimeout(() => {
                target.classList.remove("selected")
                target.setAttribute("style", "")
                if (pageUrl === target.getAttribute("href")) {
                  setMenu({ content: lastPageContent })
                } else {
                  navigate(target.getAttribute("href"))
                }
              }, 1000)
            }}
            onMouseEnter={e => {
              setNavHeight(getNavHeight(e))
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
