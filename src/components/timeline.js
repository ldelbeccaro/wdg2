import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import "../styles/timeline.styl"

const Timeline = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to="/">{siteTitle}</Link>
      <div>
        Reminder of the ceremony start time and any timing notes (e.g.
        suggesting guests arrive 30 minutes ahead of time to enjoy a
        pre-ceremony cocktail). You could also include the reception end time,
        so guests have a sense of how late the party will go.
      </div>
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
