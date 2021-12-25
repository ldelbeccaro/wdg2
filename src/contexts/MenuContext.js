import React, { useState } from "react"

const defaultValues = {
  navShowing: false,
  menuNavColor: "#ffffff",
  mainContent: <div />,
  lastPageContent: <div />,
  setMenu: () => {},
  currentPage: 'home',
}

const MenuContext = React.createContext(defaultValues)

const MenuProvider = ({ children }) => {
  const [navShowing, setNavShowing] = useState(defaultValues.navShowing)
  const [menuNavColor, setMenuColor] = useState(defaultValues.menuNavColor)
  const [MainContent, setMainContent] = useState(defaultValues.mainContent)
  const [currentPage, setCurrentPage] = useState(defaultValues.currentPage)
  const [lastPageContent, setLastPageContent] = useState(
    defaultValues.mainContent
  )
  const [navRef, setNavRef] = useState(null)

  const setMenu = ({ showing, content, lastPageContent, menuNavColor, currentPage }) => {
    showing !== undefined && setNavShowing(showing)
    content && setMainContent(content)
    lastPageContent && setLastPageContent(lastPageContent)
    menuNavColor && setMenuColor(menuNavColor)
    currentPage && setCurrentPage(currentPage)
  }

  return (
    <MenuContext.Provider
      value={{
        navShowing,
        MainContent,
        lastPageContent,
        menuNavColor,
        setMenu,
        navRef,
        setNavRef,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
export { MenuProvider }
