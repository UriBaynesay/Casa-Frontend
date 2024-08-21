import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { stayService } from "../services/stay.service"
import { UserStaysList } from "../cmps/user-stays-cmps/user-stays-list"

export const UserStays = () => {
  const [stays, setStays] = useState(null)
  const { user } = useSelector((storeState) => storeState.userModule)

  useEffect(() => {
    if (user && !stays) loadUserStays()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const loadUserStays = async () => {
    try {
      const userStays = await stayService.query({ hostId: user._id })
      setStays(userStays)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <AppHeader />
      <main className="user-details main-layout">
        <section className="user-stays-container">
          <h1>Your stays</h1>
          {stays && <UserStaysList stays={stays} />}
        </section>
      </main>
    </div>
  )
}
