import React, { useState } from "react"

const defaultValues = {
  bg: "#fff",
  bgAnimation: "3s ease",
  setBackground: () => {},
}

const BackgroundContext = React.createContext(defaultValues)

const BackgroundProvider = ({ children }) => {
  const [bg, setBgState] = useState(defaultValues.bg)
  const [bgAnimation, setBgAnimation] = useState(defaultValues.bgAnimation)

  const setBackground = ({ background, backgroundAnimation }) => {
    setBgState(background ? background : bg)
    setBgAnimation(backgroundAnimation ? backgroundAnimation : bgAnimation)
  }

  return (
    <BackgroundContext.Provider value={{ bg, bgAnimation, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundContext
export { BackgroundProvider }
