import React from "react"

import IceCream from "./iceCream"
// import SoccerBall from "./soccerBall"

import "../../styles/animations/animation.styl"

const Animation = () => {
  const components = [IceCream] //, SoccerBall, patagonia hat]
  const idx = Math.floor(Math.random() * components.length)
  const Component = components[idx]

  return <Component />
}

export default Animation
