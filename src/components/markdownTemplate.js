import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

import BackgroundContext from "../contexts/BackgroundContext"
import Layout from "../components/layout"

import Timeline from "../components/timeline"
import Questions from "../components/questions"
import RSVP from "../components/rsvp"

import "../styles/template.styl"

import home from "../images/home.png"
import schedule from "../images/schedule.png"
import rsvp from "../images/rsvp.png"

const images = {
  home,
  schedule,
  rsvp,
}

export default function Template({ data }) {
  const { setBackground } = useContext(BackgroundContext)

  useEffect(() => {
    const image = images[data.markdownRemark.frontmatter.title]
    setBackground({ background: image })
  }, [data, setBackground])

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
      }
    }
  }
`
