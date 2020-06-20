import React, { useState } from "react"

const defaultValues = {
  navHeight: 0,
  navColor: "#000",
  setMenu: () => {},
}

const MenuContext = React.createContext(defaultValues)

const MenuProvider = ({ children }) => {
  const [navHeight, setNavHeight] = useState(defaultValues.navHeight)
  const [navColor, setNavColor] = useState(defaultValues.navColor)

  const setMenu = ({ height, color }) => {
    setNavHeight(height ? height : navHeight)
    setNavColor(color ? color : navColor)
  }

  return (
    <MenuContext.Provider value={{ navHeight, navColor, setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
export { MenuProvider }
