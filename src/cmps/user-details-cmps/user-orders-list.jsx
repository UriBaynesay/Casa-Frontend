import { UserOrderPreview } from "./user-order-preview"

export const UserOrdersList = ({ orders, onUpdateOrder }) => {
  return (
    <div className="user-orders-list-container">
      <h3 className="stay-name-title">Stay name</h3>
      <h3 className="user-fullname-title">Guest name</h3>
      <h3 className="order-total-title">Order total</h3>
      <h3 className="order-start-date-title">Start date</h3>
      <h3 className="order-end-date-title">End date</h3>
      <h3 className="order-status-title">Order status</h3>
      <h3 className="action-title">Actions</h3>
      {orders.map((order) => {
        return (
          <UserOrderPreview
            key={order._id}
            order={order}
            onUpdateOrder={onUpdateOrder}
          />
        )
      })}
    </div>
  )
}
