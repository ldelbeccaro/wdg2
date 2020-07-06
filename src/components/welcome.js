import React, { useContext } from "react"
import { Link } from "gatsby"

import "../styles/welcome.styl"
import image from "../images/root.png"

import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"

export default () => {
  const { setMenu } = useContext(MenuContext)
  return (
    <div className="welcome">
      <div className="welcome-image">
        <img src={image} />
      </div>
      <div className="welcome-blob"></div>
      <div className="welcome-blob-2"></div>
      <div className="main-info">
        <h2>Laura & Ashkon are getting married!</h2>
        <p>September 21, 2021 • 4pm • Paso Robles, CA</p>
      </div>
      <div className="message">
        <p>
          Welcome to our wedding website! Click{" "}
          <a onClick={() => setMenu({ showing: true, content: Animation })}>
            MENU
          </a>{" "}
          in the top right corner to find resources and information about our
          schedule, location and accommodations, frequently asked questions, and
          more.
        </p>
        <p>
          Most importantly, please <Link to="/rsvp">RSVP</Link>!
        </p>
        <p>
          Feel free to <a href="mailto:ashkonlaura@gmail.com">contact us</a> if
          you have any questions at all :) We love you all and cannot wait to
          celebrate with you!
        </p>
        <p>Love, Laura & Ashkon</p>
      </div>
    </div>
  )
}
