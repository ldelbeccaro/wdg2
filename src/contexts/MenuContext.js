import React, { useState } from "react"

const defaultValues = {
  navShowing: false,
  menuNavColor: "#ffffff",
  mainContent: <div />,
  lastPageContent: <div />,
  setMenu: () => {},
}

const MenuContext = React.createContext(defaultValues)

const MenuProvider = ({ children }) => {
  const [navShowing, setNavShowing] = useState(defaultValues.navShowing)
  const [menuNavColor, setMenuColor] = useState(defaultValues.menuNavColor)
  const [MainContent, setMainContent] = useState(defaultValues.mainContent)
  const [lastPageContent, setLastPageContent] = useState(
    defaultValues.mainContent
  )

  const setMenu = ({ showing, content, lastPageContent, menuNavColor }) => {
    showing !== undefined && setNavShowing(showing)
    content && setMainContent(content)
    lastPageContent && setLastPageContent(lastPageContent)
    menuNavColor && setMenuColor(menuNavColor)
  }

  return (
    <MenuContext.Provider
      value={{
        navShowing,
        MainContent,
        lastPageContent,
        menuNavColor,
        setMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
export { MenuProvider }
