import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"

import "../styles/index.styl"
import "../styles/layout.styl"

const Layout = ({ children }) => {
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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          height: `calc(100% - 180px)`,
        }}
      >
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
