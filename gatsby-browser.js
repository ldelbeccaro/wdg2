import React from "react"

import { BackgroundProvider } from "./src/contexts/BackgroundContext"
import { MenuProvider } from "./src/contexts/MenuContext"

import PasswordWrapper from "./src/components/pw"

import "./src/styles/reset.css"

export const wrapRootElement = ({ element }) => (
  <BackgroundProvider>
    <MenuProvider>
      <PasswordWrapper>{element}</PasswordWrapper>
    </MenuProvider>
  </BackgroundProvider>
)
