import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { UserTripsList } from "../cmps/user-trips-cmps/user-trips-list"
import {
  socketService,
  SOCKET_EVENT_UPDATED_ORDER,
} from "../services/socket.service"
import { orderService } from "../services/order.service"

export const UserTrips = () => {
  const [trips, setTrips] = useState(null)
  const { user } = useSelector((storeState) => storeState.userModule)

  useEffect(() => {
    socketService.on(SOCKET_EVENT_UPDATED_ORDER, loadTrips)
    loadTrips()
    return () => {
      socketService.off(SOCKET_EVENT_UPDATED_ORDER, loadTrips)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadTrips = async () => {
    const userTrips = await orderService.query({ userId: user._id })
    setTrips(userTrips)
  }

  const onUpdateOrder = async (order, status) => {
    const updatedOrder = { ...order, status }
    try {
      await orderService.saveOrder(updatedOrder)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="user-trips-container">
      <h1>Your trips</h1>
      {trips && <UserTripsList trips={trips} onUpdateOrder={onUpdateOrder} />}
    </section>
  )
}
