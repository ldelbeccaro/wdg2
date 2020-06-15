import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import Timeline from "../components/timeline"
import Questions from "../components/questions"
import RSVP from "../components/rsvp"

export default function Template({ data }) {
  const post = data.markdownRemark
  const componentMap = {
    timeline: Timeline,
    questions: Questions,
    rsvp: RSVP,
  }
  const Component = componentMap[post.frontmatter.component]

  return (
    <Layout>
      {console.log(post) && <div></div>}
      <div>
        <h1>{post.frontmatter.title}</h1>
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
      }
    }
  }
`
