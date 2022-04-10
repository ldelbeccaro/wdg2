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
          <Link to="/rsvp" className="link">
            rsvp
          </Link>
          <Link to="https://registry.theknot.com/laura-del-beccaro-ashkon-nosrat-july-2022-ca/39774017" className="link" target="_blank">
            registry
          </Link>
        </div>
        <h2>ashkon & laura are getting married!</h2>
        <p>July 23, 2022 • Palos Verdes, CA</p>
        <Link to="/rsvp" className="rsvp-link link">
            rsvp →
        </Link>
      </div>
    </div>
  )
}

export default Welcome
