import { useDispatch } from "react-redux"

import { SearchByDate } from "./stay-filter-search-dates"
import { setFilterBy } from "../store/action/stay.action"
import { useState } from "react"

export const SearchModal = ({ modal, setOpenModal }) => {
  const onSetDates = () => {}

  if (modal === "location") {
    return <LocationModal setOpenModal={setOpenModal} />
  }
  if (modal === "date") {
    return (
      <div className="date-modal">
        <SearchByDate onSetDates={onSetDates} />
      </div>
    )
  }
  if (modal === "guests") {
    return <GuestModal setOpenModal={setOpenModal} />
  }
}

const LocationModal = ({ setOpenModal }) => {
  const dispatch = useDispatch()
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
                dispatch(setFilterBy({ stayLocation: location }))
                setOpenModal(null)
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

const GuestModal = ({ setOpenModal }) => {
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
              <div className="subtract-btn">-</div>
              <div className="count-container">
                {guestCount[guest.type.toLowerCase()]}
              </div>
              <div className="add-btn">+</div>
            </div>
          </div>
        )
      })}
      {}
    </div>
  )
}
