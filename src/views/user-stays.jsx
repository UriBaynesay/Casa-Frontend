import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { stayService } from "../services/stay.service"
import { StayList } from "../cmps/stay-explore-cmps/stay-list"

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
      <main className="user-profile main-layout">
        <section className="user-stays-container">
          <h1>Your stays</h1>
          {stays && <StayList stays={stays}></StayList>}
        </section>
      </main>
    </div>
  )
}
