import { Routes, Route, useLocation } from "react-router-dom"
import "../src/assets/scss/main.scss"
import routes from "./routes"
import { AppHeader } from "./cmps/app-header"
import { UserMsg } from "./cmps/user-msg"
import { AppFooter } from "./cmps/app-footer.jsx"
import { useEffect, useState } from "react"

function App() {
  const [layoutClass, setLayoutClass] = useState("")
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setLayoutClass("homepage")
        break
      default:
    }
  }, [location.pathname])

  return (
    <div className={`App ${layoutClass}`}>
      <AppHeader />
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={true}
                element={route.component}
              />
            )
          })}
        </Routes>
      <AppFooter />
      <UserMsg />
    </div>
  )
}

export default App
