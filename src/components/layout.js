import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MenuContext from "../contexts/MenuContext"

import Header from "./header"
import Menu from "./menu"

import "../styles/index.styl"
import "../styles/layout.styl"

const Layout = ({ children, Image }) => {
  const { navShowing, MainContent, setMenu } = useContext(MenuContext)

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
                relativePath
              }
              color
              menuColor
            }
          }
        }
      }
    }
  `)

  return (
    <div className="layout">
      <div className="blur">
        <div className="background">{Image}</div>
        <div
          className="color-background"
          style={{ opacity: navShowing ? 0.8 : 0 }}
        ></div>
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="content">
        <div className="main-content">{MainContent}</div>
        <Menu pages={data.allMarkdownRemark.edges} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
