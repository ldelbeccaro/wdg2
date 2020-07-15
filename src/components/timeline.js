import PropTypes from "prop-types"
import React from "react"

// import "../styles/timeline.styl"

const Timeline = () => (
  <div>
    <p>See invitation style? wdg planning workona tabs</p>
    <p>
      <a href="https://dribbble.com/shots/6201976-BDC-Landing-Page-Explorations">
        event page inspo
      </a>
    </p>
    <p>
      <a href="https://dribbble.com/shots/5466962-SAMS-Culture-Event-Page">
        another
      </a>
    </p>
    <p>
      <a href="https://throwbacks-music.com/">scrolling inspo</a>
    </p>
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
