import React from "react"

import { BackgroundProvider } from "./src/contexts/BackgroundContext"
import { MenuProvider } from "./src/contexts/MenuContext"
// import PasswordWrapper from "./src/components/pw"

import "./src/styles/reset.css"

export const wrapRootElement = ({ element }) => (
  <BackgroundProvider>
    <MenuProvider>{element}</MenuProvider>
  </BackgroundProvider>
)

// export const wrapPageElement = ({ element, props }) => {
//   // props provide same data to PasswordWrapper as Page element will get
//   // including location, data, etc - you don't need to pass it
//   return <PasswordWrapper {...props}>{element}</PasswordWrapper>
// }
