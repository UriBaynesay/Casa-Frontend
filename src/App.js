import { Routes, Route } from "react-router-dom"

import "../src/styles/scss/main.scss"
import routes from "./routes"
import { UserMsg } from "./cmps/user-msg"
import { AppFooter } from "./cmps/app-footer.jsx"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { onLogout } from "./store/action/user.action.js"

export default function App() {
  const dispatch = useDispatch()
  const onBrowserSessionUnload = () => {
    dispatch(onLogout())
  }
  useEffect(() => {
    window.addEventListener("beforeunload", onBrowserSessionUnload)

    return () => {
      window.removeEventListener("beforeunload", onBrowserSessionUnload)
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={true}
              element={route.component}
            >
              {route.nestedRoutes &&
                route.nestedRoutes.map((nested) => {
                  return (
                    <Route
                      key={nested.path}
                      path={nested.path}
                      exact={true}
                      element={nested.component}
                    />
                  )
                })}
            </Route>
          )
        })}
      </Routes>
      <AppFooter />
      <UserMsg />
    </div>
  )
}
