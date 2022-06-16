import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { orderService } from "../services/order.service"
import {
  socketService,
  SOCKET_EVENT_NEW_ORDER,
  SOCKET_EVENT_UPDATED_ORDER,
} from "../services/socket.service"
import { UserOrdersList } from "./user-orders-list"
import { UserOrdersStats } from "./user-orders-stats"
import { updateUserNotification } from "../store/action/user.action";

export const UserOrders = () => {
  const [orders, setOrders] = useState(null)
  const { user } = useSelector((storeState) => storeState.userModule)
  const dispatch=useDispatch()

  useEffect(() => {
    socketService.on(SOCKET_EVENT_NEW_ORDER, loadUserOrders)
    socketService.on(SOCKET_EVENT_UPDATED_ORDER, loadUserOrders)
    dispatch(updateUserNotification(false))
    if (user && !orders) loadUserOrders()
    return () => {
      socketService.off(SOCKET_EVENT_NEW_ORDER, loadUserOrders)
      socketService.off(SOCKET_EVENT_UPDATED_ORDER, loadUserOrders)
    }
  }, [])

  const loadUserOrders = async () => {
    const userOrders = await orderService.query({ hostId: user._id })
    if (userOrders.length) setOrders(userOrders)
  }

  const onUpdateOrder = async (order, status) => {
    const newOrder = { ...order, status }
    try {
      await orderService.saveOrder(newOrder)
      loadUserOrders()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="user-orders-container">
      <UserOrdersStats orders={orders} />
      <h1>Orders for your stays</h1>
      {orders && (
        <UserOrdersList orders={orders} onUpdateOrder={onUpdateOrder} />
      )}
    </section>
  )
}
