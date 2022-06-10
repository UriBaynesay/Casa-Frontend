import React from "react"

import hongkong from "../assets/img/logo/hongkong.jpg"
import rio from "../assets/img/logo/rio.jpg"
import barcelona from "../assets/img/logo/barcelona.jpg"
import newyork from "../assets/img/logo/newyork.jpg"

export function PopDestination({ onSetFilter }) {
  return (
    <section className="pop-cities homepage-layout">
      <div className="pop-cities-container">
        <h1 className="title">Popular Destinations</h1>

        <div className="cards-container">
          <div className="card" onClick={() => onSetFilter("Hong Kong")}>
            <img src={hongkong} alt="" />
            <div className="city-details">
              <span className="town">Hong Kong </span>
              <span className="country">China</span>
            </div>
          </div>

          <div className="card" onClick={() => onSetFilter("Rio de Janeiro")}>
            <img src={rio} alt="" />
            <div className="city-details">
              <span className="town">Rio de Janeiro </span>
              <span className="country">Brazil</span>
            </div>
          </div>

          <div className="card" onClick={() => onSetFilter("Barcelona")}>
            <img src={barcelona} alt="" />
            <div className="city-details">
              <span className="town">Barcelona </span>
              <span className="country">Spain</span>
            </div>
          </div>

          <div className="card " onClick={() => onSetFilter("New York")}>
            <img src={newyork} alt="" />
            <div className="city-details">
              <span className="town">New York </span>
              <span className="country">United States</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
