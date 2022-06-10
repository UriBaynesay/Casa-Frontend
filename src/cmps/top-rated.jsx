import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { stayService } from "../services/stay.service"
export function TopRated() {
  const [stays, setStays] = useState(null)

  useEffect(() => {
    loadStays()
  }, [])

  const loadStays = async () => {
    const stay1 = await stayService.getById("622f337a75c7d36e498aaaf9")
    const stay2 = await stayService.getById("622f337a75c7d36e498aaaff")
    const stay3 = await stayService.getById("622f337a75c7d36e498aaafb")
    const stay4 = await stayService.getById("622f337a75c7d36e498aaafc")
    setStays([stay1, stay2, stay3, stay4])
  }

  if (!stays) return <section className="top-rated-container"></section>

  return (
    <section className="top-rated homepage-layout">
      <div className="top-rated-container">
        <h1 className="title">Top Rated</h1>
        <div className="cards-container">
          {stays.map((stay, idx) => {
            return (
              <div className="card" key={idx}>
                <Link to={`/stay/details/${stay._id}`}>
                  <React.Fragment>
                    <img
                      src={require(`../assets/img/houses/${stay.imgUrls[0]}`)}
                      alt=""
                    />
                    <div className="city-details">
                      <span className="title">{stay.name} </span>
                      <span className="street">{stay.address.street}</span>
                    </div>
                  </React.Fragment>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
