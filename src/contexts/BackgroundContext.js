import React, { useState } from "react"

const defaultValues = {
  bg: "blank.png",
  colorBg: "#fff",
  setBackground: () => {},
}

const BackgroundContext = React.createContext(defaultValues)

const BackgroundProvider = ({ children }) => {
  const [bg, setBgState] = useState(defaultValues.bg)
  const [colorBg, setColorBg] = useState(defaultValues.colorBg)
  const [lastColorBg, setLastColorBg] = useState(defaultValues.colorBg)

  const setBackground = ({
    background,
    colorBackground,
    lastColorBackground,
  }) => {
    background && setBgState(background)
    colorBackground && setColorBg(colorBackground)
    lastColorBackground && setLastColorBg(lastColorBackground)
  }

  return (
    <BackgroundContext.Provider
      value={{ bg, colorBg, lastColorBg, setBackground }}
    >
      {children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundContext
export { BackgroundProvider }
