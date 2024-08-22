import { stayService } from "../../services/stay.service"
import { useState } from "react"

import { AmenityIcon } from "./amenity-icon"
import { Link } from "react-router-dom"

export const StayInfo = ({ stay }) => {
  const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false)

  if (!stay) return <section className="stay-main-info-container"></section>
  const amenities = stayService.getAmenities()
  return (
    <section className="stay-main-info-container">
      <section className="short-info-container">
        <div className="txt-info">
          <h2>
            {stay.roomType} hosted by {stay.host.fullname}
          </h2>
          <h4>
            {" "}
            {stay.capacity} guests · {stay.bedrooms} bedrooms · {stay.beds} beds
            · {stay.bathrooms} baths
          </h4>
        </div>
        <Link to={`/user/profile/${stay.host._id}`}>
          {" "}
          <div className="host-img-container">
            <img src={stay.host.thumbnailUrl} alt="" />
          </div>
        </Link>
      </section>
      <section className="summary">
        <p>{stay.summary}</p>
      </section>
      <section className="amenities-container">
        <h2>What this place offers</h2>
        <div
          className="amenities"
          style={isAmenitiesExpanded ? { maxHeight: "fit-content" } : null}
        >
          {amenities.map((amenity, idx) => {
            return (
              <AmenityIcon
                iconType={amenity}
                stayHas={stay.amenities.find((a) => a === amenity)}
                key={idx}
              />
            )
          })}
        </div>
        <div
          className="amenities-btn"
          onClick={() => {
            setIsAmenitiesExpanded(!isAmenitiesExpanded)
          }}
        >
          <h3>{isAmenitiesExpanded ? "Show less" : "Show more"}</h3>
        </div>
      </section>
    </section>
  )
}
