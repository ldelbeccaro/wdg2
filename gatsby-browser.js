import React from "react"
import { BackgroundProvider } from "./src/contexts/BackgroundContext"
import { MenuProvider } from "./src/contexts/MenuContext"

import "./src/styles/reset.css"

export const wrapRootElement = ({ element }) => (
  <BackgroundProvider>
    <MenuProvider>{element}</MenuProvider>
  </BackgroundProvider>
)
