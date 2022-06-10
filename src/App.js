import { Routes, Route } from "react-router-dom"

import "../src/styles/scss/main.scss"
import routes from "./routes"
import { AppHeader } from "./cmps/app-header"
import { UserMsg } from "./cmps/user-msg"
import { AppFooter } from "./cmps/app-footer.jsx"

export default function App() {
  return (
    <div className="App">
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
