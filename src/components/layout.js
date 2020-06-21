import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Header from "./header"
import Menu from "./menu"

import "../styles/index.styl"
import "../styles/layout.styl"

const Layout = ({ children }) => {
  const { bg, bgAnimation, colorBg } = useContext(BackgroundContext)
  const { MainContent, setMenu } = useContext(MenuContext)

  useEffect(() => setMenu({ content: children, lastPageContent: children }), [])

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
              image {
                publicURL
              }
              color
            }
          }
        }
      }
    }
  `)

  return (
    <div className="layout">
      <div className="blur">
        <div
          className={`background${
            bg.startsWith("/static/root") ? ` root` : ``
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            animation: `backgroundOpacity ${bgAnimation}`,
          }}
        ></div>
        <div
          className="color-background"
          style={{
            background: "#151414", //colorBg,
            opacity: colorBg === `#fff` ? 0 : 0.7,
          }}
        ></div>
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="content">
        {MainContent}
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
