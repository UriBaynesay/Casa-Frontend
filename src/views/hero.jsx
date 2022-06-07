import React from "react"

export function Hero() {
  return (
    <div className="hero-container">
      <div className="img-container">
        <img src={require("../assets/img/hero/hero.jpg")} alt="" />
        <div className="hero-txt">
          <h1>Not sure where to go? Perfect.</h1>
        </div>
      </div>
    </div>
  )
}
