import { UserTripPreview } from "./user-trip-preview"

export const UserTripsList = ({ trips, onUpdateOrder }) => {
  return (
    <section className="user-trips-list-container">
      <h3 className="stay-name-title">Stay name</h3>
      <h3 className="stay-address-title">Stay address</h3>
      <h3 className="user-fullname-title">Owner name</h3>
      <h3 className="order-total-title">Order total</h3>
      <h3 className="order-start-date-title">Start date</h3>
      <h3 className="order-end-date-title">End date</h3>
      <h3 className="order-status-title">Order status</h3>
      <h3 className="action-title">Actions</h3>
      {trips.map((trip) => {
        return <UserTripPreview trip={trip} onUpdateOrder={onUpdateOrder} />
      })}
    </section>
  )
}
