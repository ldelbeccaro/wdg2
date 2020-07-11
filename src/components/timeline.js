import PropTypes from "prop-types"
import React from "react"

// import "../styles/timeline.styl"

const Timeline = () => (
  <div>
    <a href="https://dribbble.com/shots/6201976-BDC-Landing-Page-Explorations">
      event page inspo
    </a>
    <a href="https://dribbble.com/shots/2887768-memorabilia-of-the-introduction">
      another
    </a>
    <a href="https://dribbble.com/shots/5466962-SAMS-Culture-Event-Page">
      another
    </a>
    <a href="this kind of scrolling? https://throwbacks-music.com/">
      scrolling inspo
    </a>
    <div>
      Reminder of the ceremony start time and any timing notes (e.g. suggesting
      guests arrive 30 minutes ahead of time to enjoy a pre-ceremony cocktail).
      You could also include the reception end time, so guests have a sense of
      how late the party will go.
    </div>
  </div>
)

Timeline.propTypes = {
  siteTitle: PropTypes.string,
}

Timeline.defaultProps = {
  siteTitle: `Laura & Ashkon`,
}

export default Timeline
