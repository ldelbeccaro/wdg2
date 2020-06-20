import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundContext from "../contexts/BackgroundContext"

import Header from "./header"
import Menu from "./menu"

import "../styles/index.styl"
import "../styles/layout.styl"

const Layout = ({ children }) => {
  const { bg, bgAnimation } = useContext(BackgroundContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___index] }) {
        edges {
          node {
            frontmatter {
              title
              url
              component
            }
          }
        }
      }
    }
  `)

  const backgroundCss = bg.startsWith("#")
    ? bg
    : `url(${bg}) no-repeat center 0 fixed`

  return (
    <div className="layout">
      <div className="blur">
        <div
          className={`background${
            bg.startsWith("/static/root") ? ` root` : ``
          }`}
          style={{
            background: backgroundCss,
            animation: `backgroundOpacity ${bgAnimation}`,
          }}
        ></div>
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="content">
        <main>{children}</main>
        <Menu pages={data.allMarkdownRemark.edges} />
      </div>
      <footer>
        <div>© {new Date().getFullYear()}</div>
        <div>
          Email us!{" "}
          <a href="mailto:ashkonlaura@gmail.com">ashkonlaura@gmail.com</a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
