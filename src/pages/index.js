import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"

import BackgroundContext from "../contexts/BackgroundContext"

import Layout from "../components/layout"
import SEO from "../components/seo"

import root from "../images/root.png"

const IndexPage = () => {
  const { setBackground } = useContext(BackgroundContext)
  useEffect(
    () => setBackground({ background: root, backgroundAnimation: "0" }),
    [setBackground]
  )

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home">
        <div>
          <Link to="/rsvp">RSVP button goes here</Link>
          <div>
            Should automatically transition to home page... maybe should just be
            home page but then link is dumb, maybe should just go to /home
          </div>
          <div className="welcome-image"></div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
