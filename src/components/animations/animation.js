import React from "react"

import IceCream from "./iceCream"
import SoccerField from "./iceCream"

const Animation = () => {
  const components = [IceCream, SoccerField]
  const idx = Math.floor(Math.random() * components.length)
  const Component = components[idx]

  return <Component />
}

export default Animation
