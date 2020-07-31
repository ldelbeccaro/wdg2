import React, { useContext } from "react"
import { Link } from "gatsby"

import "../styles/welcome.styl"
import image from "../images/root.png"

import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"

export default ({ buffer }) => {
  const { setMenu } = useContext(MenuContext)
  return (
    <div className={`welcome${buffer ? ` buffer` : ``}`}>
      <div className="welcome-blob"></div>
      <div className="welcome-blob-2"></div>
      <div className="main-info">
        <h2>Laura & Ashkon are getting married!</h2>
        <p>April 21, 2022 • 4pm • Paso Robles, CA</p>
      </div>
      <div className="welcome-image">
        <img src={image} alt="Laura and Ashkon in Italy" />
      </div>
      <div className="message">
        <p>
          Welcome to our wedding website! Click{" "}
          <span
            className="link"
            onClick={() => setMenu({ showing: true, content: Animation })}
            onKeyDown={e => {
              if (e.keyCode === 13)
                setMenu({ showing: true, content: Animation })
            }}
            role="link"
            tabIndex={0}
          >
            MENU
          </span>{" "}
          in the top right corner to find resources and information about our
          schedule, location and accommodations, frequently asked questions, and
          more.
        </p>
        <p>
          Feel free to <a href="mailto:ashkonlaura@gmail.com">contact us</a> if
          you have any questions at all :) We love you all and cannot wait to
          celebrate with you!
        </p>
        <p>Love, Laura & Ashkon</p>
      </div>
      <Link to="/rsvp" className="button">
        RSVP →
      </Link>
      <div style={{ marginTop: "80px" }}>
        <p style={{ color: "red" }}>firefox</p>
        <p style={{ color: "red" }}>legos</p>
        <p style={{ color: "red" }}>password</p>
        <p style={{ color: "red" }}>
          make sure images load before they need to
        </p>
        <p style={{ color: "red" }}>
          figure out 0-width menu causing scrolling to right
        </p>
        <p style={{ color: "red" }}>
          when planned: links in FAQ, schedule, location (plus content
          animations & responsiveness), pick colors & pictures
        </p>
      </div>
    </div>
  )
}
