import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import "../styles/timeline.styl"

const Timeline = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
)

Timeline.propTypes = {
  siteTitle: PropTypes.string,
}

Timeline.defaultProps = {
  siteTitle: `Laura & Ashkon`,
}

export default Timeline
