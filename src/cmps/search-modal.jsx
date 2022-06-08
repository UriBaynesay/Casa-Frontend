import { useState } from "react"

import { SearchByDate } from "./stay-filter-search-dates"

export const SearchModal = ({ modal, onSetFilter }) => {
  const onSetDates = () => {}

  if (modal === "location") {
    return <LocationModal onSetFilter={onSetFilter} />
  }
  if (modal === "date") {
    return (
      <div className="date-modal">
        <SearchByDate onSetDates={onSetDates} />
      </div>
    )
  }
  if (modal === "guests") {
    return <GuestModal onSetFilter={onSetFilter} />
  }
}

const LocationModal = ({ onSetFilter }) => {
  const locations = [
    "Spain",
    "United States",
    "Canada",
    "Hong kong",
    "Brazil",
    "Portugal",
  ]
  return (
    <div className="location-modal">
      <h4>Search by region</h4>
      <div className="location-cards-container">
        {locations.map((location) => {
          return (
            <div
              className="card"
              onClick={() => {
                onSetFilter(location, "stayLocation")
              }}
            >
              <div className="img-container">
                <img
                  src={require(`../assets/img/countries/${location}.png`)}
                  alt=""
                />
              </div>
              <h4>{location}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const GuestModal = ({ onSetFilter }) => {
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
  )
}
