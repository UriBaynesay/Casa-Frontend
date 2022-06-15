import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { UserTripsList } from "./user-trips-list"
import { orderService } from "../services/order.service";

export const UserTrips = () => {
  const [trips, setTrips] = useState(null)
  const { user } = useSelector((storeState) => storeState.userModule)

  useEffect(() => {
    loadTrips()
  }, [])

  const loadTrips = async () => {
    const userTrips = await orderService.query({ userId: user._id })
    setTrips(userTrips)
  }

  return (
    <section className="user-trips-container">
      <h1>Your trips</h1>
      {trips&&<UserTripsList trips={trips}/>}
    </section>
  )
}
