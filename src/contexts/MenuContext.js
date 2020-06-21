import React, { useState } from "react"

const defaultValues = {
  navHeight: 0,
  mainContent: <div />,
  lastPageContent: <div />,
  setMenu: () => {},
}

const MenuContext = React.createContext(defaultValues)

const MenuProvider = ({ children }) => {
  const [navHeight, setNavHeight] = useState(defaultValues.navHeight)
  const [MainContent, setMainContent] = useState(defaultValues.mainContent)
  const [lastPageContent, setLastPageContent] = useState(
    defaultValues.mainContent
  )

  const setMenu = ({ height, content, lastPageContent }) => {
    height && setNavHeight(height)
    content && setMainContent(content)
    lastPageContent && setLastPageContent(lastPageContent)
  }

  return (
    <MenuContext.Provider
      value={{ navHeight, MainContent, lastPageContent, setMenu }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
export { MenuProvider }
