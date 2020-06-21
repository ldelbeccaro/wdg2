import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

import BackgroundContext from "../contexts/BackgroundContext"
import MenuContext from "../contexts/MenuContext"

import Layout from "../components/layout"
import Timeline from "../components/timeline"
import Questions from "../components/questions"
import RSVP from "../components/rsvp"

import "../styles/template.styl"

export default function Template({ data }) {
  const { setBackground } = useContext(BackgroundContext)

  useEffect(() => {
    setBackground({
      background: data.markdownRemark.frontmatter.image.publicURL,
      colorBackground: "#fff",
    })
  }, [data])

  const post = data.markdownRemark
  const componentMap = {
    timeline: Timeline,
    questions: Questions,
    rsvp: RSVP,
  }
  const Component = componentMap[post.frontmatter.component]

  return (
    <Layout>
      <div className="template-content">
        <h2>{post.frontmatter.title}</h2>
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
        image {
          publicURL
        }
      }
    }
  }
`
