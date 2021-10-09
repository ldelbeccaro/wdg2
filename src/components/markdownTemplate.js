import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Timeline from "../components/timeline"
import Questions from "../components/questions"
import Photos from "../components/photos"
import RSVP from "../components/rsvp"
import Location from "../components/location"

import "../styles/template.styl"

export default function Template({ data }) {
  const { setBackground } = useContext(BackgroundContext)
  const { setMenu } = useContext(MenuContext)

  useEffect(() => {
    setBackground({
      background: data.markdownRemark.frontmatter.image.relativePath,
      colorBackground: data.markdownRemark.frontmatter.color,
      lastColorBackground: data.markdownRemark.frontmatter.color,
    })
    setMenu({ menuNavColor: data.markdownRemark.frontmatter.menuColor })
  }, [])

  const post = data.markdownRemark
  const componentMap = {
    timeline: Timeline,
    questions: Questions,
    rsvp: RSVP,
    welcome: Welcome,
    photos: Photos,
    location: Location,
  }
  const Component = componentMap[post.frontmatter.component]

  const Image = <Img fluid={data.placeholderImage.childImageSharp.fluid} />

  return (
    <Layout Image={Image}>
      <div
        className={`template-content ${post.frontmatter.component}-template`}
      >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {post.frontmatter.component && <Component />}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $imagePath: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
        component
        color
        menuColor
        image {
          publicURL
          relativePath
        }
      }
    }
    placeholderImage: file(relativePath: { eq: $imagePath }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
