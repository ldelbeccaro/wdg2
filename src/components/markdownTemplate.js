import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Timeline from "../components/timeline"
import Questions from "../components/questions"
import Photos from "../components/photos"
import RSVP from "../components/rsvp"

import "../styles/template.styl"

export default function Template({ data }) {
  const { setBackground } = useContext(BackgroundContext)
  const { setMenu } = useContext(MenuContext)

  useEffect(() => {
    setBackground({
      background: data.markdownRemark.frontmatter.image.publicURL,
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
  }
  const Component = componentMap[post.frontmatter.component]

  return (
    <Layout>
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
  query($slug: String!) {
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
        }
      }
    }
  }
`
