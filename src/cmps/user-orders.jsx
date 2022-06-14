import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { orderService } from "../services/order.service"
import { UserOrdersList } from "./user-orders-list"
import { UserOrdersStats } from "./user-orders-stats";

export const UserOrders = () => {
  const [orders, setOrders] = useState(null)
  const { user } = useSelector((storeState) => storeState.userModule)

  useEffect(() => {
    if (user && !orders) loadUserOrders()
  }, [user])

  const loadUserOrders = async () => {
    const userOrders = await orderService.query({hostId:user._id})
    setOrders(userOrders)
  }
  return (
    <section className="user-orders-container">
      <UserOrdersStats orders={orders}/>
      <h1>Orders for your stays</h1>
      {orders&&<UserOrdersList orders={orders} />}
    </section>
  )
}
