import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "../styles/welcome.styl"

import MenuContext from "../contexts/MenuContext"

import Animation from "./animations/animation"

const Welcome = ({ buffer }) => {
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
          <Link to="/location" className="link">
            accommodations
          </Link>
          <Link to="https://registry.theknot.com/laura-del-beccaro-ashkon-nosrat-july-2022-ca/39774017" className="link">
            registry
          </Link>
          {/* <Link to="/rsvp" className="link">
            rsvp
          </Link> */}
        </div>
        <h2>ashkon & laura are getting married!</h2>
        <p>July 23, 2022 • Palos Verdes, CA</p>
        {/* <Link to="/rsvp" className="rsvp-link link">
            rsvp →
        </Link> */}
        <Link to="/location" className="rsvp-link link">
            book →
        </Link>
      </div>
    </div>
  )
}

export default Welcome
