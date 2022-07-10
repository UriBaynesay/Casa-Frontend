import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { stayService } from "../services/stay.service"
import { UserStaysList } from "./user-stays-list"

export const UserStays = () => {
  const [stays, setStays] = useState(null)
  const { user } = useSelector((storeState) => storeState.userModule)

  useEffect(() => {
    if (user && !stays) loadUserStays()
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
    <section className="user-stays-container">
      <h1>Your stays</h1>
      {stays && <UserStaysList stays={stays} />}
    </section>
  )
}
