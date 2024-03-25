import React from "react"

export const UserStayPreview = ({ stay }) => {
  return (
    <React.Fragment>
      <div className="stay-name">{stay.name}</div>
      <div className="stay-name">{stay.price}</div>
      <div className="stay-name">{stay.address.street}</div>
    </React.Fragment>
  )
}
