import { UserStayPreview } from "./user-stay-preview"

export const UserStaysList = ({ stays }) => {
  return (
    <div className="user-stays-list-container">
      <h3 className="stay-name-titile">Name</h3>
      <h3 className="stay-price-titile">Price / night</h3>
      <h3 className="stay-address-titile">Address</h3>
      {stays.map((stay) => {
        return <UserStayPreview key={stay._id} stay={stay} />
      })}
    </div>
  )
}
