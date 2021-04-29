import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"

const IndexPage = ({ data }) => {
  const Image = <Img fluid={data.placeholderImage.childImageSharp.fluid} />

  return (
    <Layout Image={Image} blur={false}>
      <SEO title="Home" />
      <div className="home">
        <Welcome buffer />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "proposal.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
