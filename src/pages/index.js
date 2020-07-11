import React, { useContext, useEffect } from "react"

import BackgroundContext from "../contexts/BackgroundContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"

import blank from "../images/blank.png"

const IndexPage = () => {
  const { setBackground } = useContext(BackgroundContext)
  useEffect(
    () => setBackground({ background: blank, backgroundAnimation: "0" }),
    [setBackground]
  )

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home">
        <Welcome buffer />
      </div>
    </Layout>
  )
}

export default IndexPage
