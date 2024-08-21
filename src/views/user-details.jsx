import { Fragment } from "react"
import { AppHeader } from "../cmps/app-header"

export const UserDetails = () => {
  return (
    <Fragment>
      <AppHeader />
      <main className="user-details main-layout">
        <div className="user-details-container">
          <h1>hello from user details</h1>
        </div>
      </main>
    </Fragment>
  )
}
