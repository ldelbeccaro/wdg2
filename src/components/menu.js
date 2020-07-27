import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"

import "../styles/menu.styl"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

const Menu = ({ pages }) => {
  const [navHeight, setNavHeight] = useState(0)
  const { colorBg, lastColorBg, setBackground } = useContext(BackgroundContext)
  const {
    navShowing,
    lastPageContent,
    setMenu,
    navRef,
    setNavRef,
  } = useContext(MenuContext)
  const [currentNavItem, setCurrentNavItem] = useState(null)
  const [pageUrl, setPageUrl] = useState("/")

  useEffect(() => {
    if (navRef) {
      const currentPage =
        typeof window !== `undefined`
          ? pages.find(
              page => window.location.pathname === page.node.frontmatter.url
            )
          : undefined
      if (currentPage) {
        setPageUrl(currentPage.node.frontmatter.url)
      }
    }
  }, [navRef])

  useEffect(() => {
    if (navRef) {
      setCurrentNavItem(navRef.querySelector(`.nav-item[href="${pageUrl}"]`))
    }
  }, [pageUrl])

  const getNavHeight = useCallback(
    e => {
      const target = e ? e.target : currentNavItem

      if (!target) {
        return `0px`
      }
      if (target === target.parentNode.lastChild) {
        return `100%`
      }
      const targetY = target.getBoundingClientRect().bottom
      const navY = navRef ? navRef.getBoundingClientRect().y : 0
      return `${targetY - navY}px`
    },
    [currentNavItem, navRef]
  )

  useEffect(() => setNavHeight(getNavHeight()), [
    navShowing,
    getNavHeight,
    navRef,
  ])

  return (
    <div
      className={`nav${navShowing ? `` : ` hidden`}`}
      ref={setNavRef}
      onMouseLeave={() => {
        setNavHeight(getNavHeight())
        setBackground({ colorBackground: lastColorBg })
      }}
      role="none"
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
              target.setAttribute("style", `color: ${page.color};`)
              setBackground({ lastColorBackground: page.color })
              if (currentNavItem) {
                currentNavItem.setAttribute("style", "color: #8c8c8c;")
              }

              setTimeout(() => {
                setMenu({ content: <div /> })
                navRef.setAttribute("style", "width: 0; left: 100vw;")
              }, 500)

              setTimeout(() => {
                navRef.setAttribute(
                  "style",
                  "width: 0; padding: 0; left: 100vw"
                )
                setMenu({
                  showing: false,
                  menuNavColor: page.menuColor,
                })
              }, 700)

              setTimeout(() => {
                target.classList.remove("selected")
                target.setAttribute("style", "")
                navRef.setAttribute("style", "")
                if (pageUrl === target.getAttribute("href")) {
                  setMenu({ content: lastPageContent })
                } else {
                  navigate(target.getAttribute("href"))
                }
              }, 1500)
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
