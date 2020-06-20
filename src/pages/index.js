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
          <Link to="/rsvp">RSVP</Link>
          <div className="welcome">welcome</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
