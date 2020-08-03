import React from "react"

import IceCream from "./iceCream"
import SoccerBall from "./soccerBall"

const Animation = () => {
  const components = [IceCream, SoccerBall]
  const idx = Math.floor(Math.random() * components.length)
  const Component = components[idx]

  return <Component />
}

export default Animation
