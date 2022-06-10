import { useState } from "react"

export const GuestModal = ({ onSetFilter }) => {
  const guests = [
    { type: "Adults", description: "Ages 13 or above" },
    { type: "Children", description: "Ages 2-12" },
    { type: "Infants", description: "Under 2" },
    { type: "Pets", description: "" },
  ]
  const [guestCount, setGuestCount] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  })

  const onChangeGuests = (type, diff) => {
    if (guestCount[type] === 0 && diff === -1) return
    onSetFilter(
      guestCount.adults + guestCount.children + guestCount.infants + diff,
      "guestCount"
    )
    setGuestCount({ ...guestCount, [type]: guestCount[type] + diff })
  }

  return (
    <div className="guest-modal-wrapper">
      <div className="guests-modal-container">
        {guests.map((guest) => {
          return (
            <div className="guest-input-container">
              <div className="txt">
                <h3>{guest.type}</h3>
                <h4>{guest.description}</h4>
              </div>
              <div className="btn-container">
                <div
                  className="btn"
                  onClick={() => onChangeGuests(guest.type.toLowerCase(), -1)}
                >
                  -
                </div>
                <div className="count-container">
                  {guestCount[guest.type.toLowerCase()]}
                </div>
                <div
                  className="btn"
                  onClick={() => onChangeGuests(guest.type.toLowerCase(), 1)}
                >
                  +
                </div>
              </div>
            </div>
          )
        })}
        {}
      </div>
    </div>
  )
}
