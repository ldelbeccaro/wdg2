import React, { useState } from "react"

const defaultValues = {
  navShowing: false,
  navHeight: 0,
  mainContent: <div />,
  lastPageContent: <div />,
  setMenu: () => {},
}

const MenuContext = React.createContext(defaultValues)

const MenuProvider = ({ children }) => {
  const [navShowing, setNavShowing] = useState(defaultValues.navShowing)
  const [navHeight, setNavHeight] = useState(defaultValues.navHeight)
  const [MainContent, setMainContent] = useState(defaultValues.mainContent)
  const [lastPageContent, setLastPageContent] = useState(
    defaultValues.mainContent
  )

  const setMenu = ({ showing, height, content, lastPageContent }) => {
    showing !== undefined && setNavShowing(showing)
    height && setNavHeight(height)
    content && setMainContent(content)
    lastPageContent && setLastPageContent(lastPageContent)
  }

  return (
    <MenuContext.Provider
      value={{ navShowing, navHeight, MainContent, lastPageContent, setMenu }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
export { MenuProvider }
