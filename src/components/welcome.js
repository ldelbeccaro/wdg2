import React, { useContext } from "react"
import { Link } from "gatsby"

import "../styles/welcome.styl"

import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"

export default ({ buffer }) => {
  const { setMenu } = useContext(MenuContext)
  return (
    <div className={`welcome${buffer ? ` buffer` : ``}`}>
      <div className="main-info">
        <div className="links">
          <div
            className="link"
            onClick={() => setMenu({ showing: true, content: Animation })}
            onKeyDown={e => {
              if (e.keyCode === 13)
                setMenu({ showing: true, content: Animation })
            }}
            role="link"
            tabIndex={0}
          >
            menu
          </div>
          <Link to="/rsvp" className="link">
            rsvp
          </Link>
          <a href="mailto:ashkonlaura@gmail.com" className="link">
            contact
          </a>
        </div>
        <h2>Ashkon & Laura are getting married!</h2>
        <p>July 23, 2022 • Palos Verdes, CA</p>
        <Link to="/rsvp" className="rsvp-link link">
            rsvp →
        </Link>
      </div>
      <div style={{ marginTop: "80px" }}>
        <p style={{ color: "red" }}>
          make us be more to the right in home image
          maybe load images in photos.js with gatsby-image for slow connections (see image.js)
          change font of body text
        </p>
        <p style={{ color: "red" }}>
          when planned: links in FAQ, schedule, location (plus content
          animations & responsiveness), pick colors & pictures
        </p>
      </div>
    </div>
  )
}
