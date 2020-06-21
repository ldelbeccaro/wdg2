import React, { useState } from "react"

const defaultValues = {
  bg: "#fff",
  bgAnimation: "3s ease",
  colorBg: "#fff",
  setBackground: () => {},
}

const BackgroundContext = React.createContext(defaultValues)

const BackgroundProvider = ({ children }) => {
  const [bg, setBgState] = useState(defaultValues.bg)
  const [colorBg, setColorBg] = useState(defaultValues.colorBg)
  const [bgAnimation, setBgAnimation] = useState(defaultValues.bgAnimation)

  const setBackground = ({
    background,
    backgroundAnimation,
    colorBackground,
  }) => {
    background && setBgState(background)
    colorBackground && setColorBg(colorBackground)
    backgroundAnimation && setBgAnimation(backgroundAnimation)
  }

  return (
    <BackgroundContext.Provider
      value={{ bg, bgAnimation, colorBg, setBackground }}
    >
      {children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundContext
export { BackgroundProvider }
