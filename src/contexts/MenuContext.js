import React, { useState } from "react"

const defaultValues = {
  navShowing: false,
  mainContent: <div />,
  lastPageContent: <div />,
  setMenu: () => {},
}

const MenuContext = React.createContext(defaultValues)

const MenuProvider = ({ children }) => {
  const [navShowing, setNavShowing] = useState(defaultValues.navShowing)
  const [MainContent, setMainContent] = useState(defaultValues.mainContent)
  const [lastPageContent, setLastPageContent] = useState(
    defaultValues.mainContent
  )

  const setMenu = ({ showing, content, lastPageContent }) => {
    showing !== undefined && setNavShowing(showing)
    content && setMainContent(content)
    lastPageContent && setLastPageContent(lastPageContent)
  }

  return (
    <MenuContext.Provider
      value={{ navShowing, MainContent, lastPageContent, setMenu }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
export { MenuProvider }
