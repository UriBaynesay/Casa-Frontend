import React from "react"

import hongkong from "../assets/img/logo/hongkong.jpg"
import rio from "../assets/img/logo/rio.jpg"
import barcelona from "../assets/img/logo/barcelona.jpg"
import newyork from "../assets/img/logo/newyork.jpg"

export function PopDestination({ onSetFilter }) {
  return (
    <section className="pop-cities-container">
      <h1 className="title">Popular Destinations</h1>
      <div className="cards-container">
        <div className="card" onClick={() => onSetFilter("Hong Kong")}>
          <img src={hongkong} alt="" />
          <div className="city-details">
            <h3 className="color-city">
              Hong Kong <span>China</span>
            </h3>
          </div>
        </div>

        <div className="card" onClick={() => onSetFilter("Rio de Janeiro")}>
          <img src={rio} alt="" />
          <div className="city-details">
            <h3 className="color-city">
              Rio de Janeiro <span>Brazil</span>
            </h3>
          </div>
        </div>

        <div className="card" onClick={() => onSetFilter("Barcelona")}>
          <img src={barcelona} alt="" />
          <div className="city-details">
            <h3 className="color-city">
              Barcelona <span>Spain</span>
            </h3>
          </div>
        </div>

        <div className="card " onClick={() => onSetFilter("New York")}>
          <img src={newyork} alt="" />
          <div className="city-details">
            <h3 className="color-city">
              New York <span>United States</span>
            </h3>
          </div>
        </div>
      </div>
      {/* <section className='pop-cities'>
                
            </section> */}
    </section>
  )
}
