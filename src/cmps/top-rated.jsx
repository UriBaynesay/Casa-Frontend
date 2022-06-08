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
    const stay2 = await stayService.getById("622f337a75c7d36e498aaafa")
    const stay3 = await stayService.getById("622f337a75c7d36e498aaafb")
    const stay4 = await stayService.getById("622f337a75c7d36e498aaafc")
    setStays([stay1, stay2, stay3, stay4])
  }

  if (!stays) return <section className="top-rated-container"></section>

  return (
    <section className="top-rated-container">
      <h1 className="title">Top Rated</h1>

      <div className="cards-container">
        {stays.map((stay,idx) => {
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
      {/* <section className="pop-cities">
        
        <Link to={`/stay/details/${stay2._id}`}>
          <div className="card" onClick={() => onSetFilter('Rio de Janeiro')}>
            {stay2 && <img src={require(`../assets/img/houses/${stay2.imgUrls[0]}`)} />}

            <div className="city-details">
              <h3 className="color-city">Mike's House           <span>United States</span></h3>
              <h4>

              </h4>
            </div>
          </div>
        </Link>
        <Link to={`/stay/details/${stay3._id}`}> <div className="card">
          {stay3 && <img src={require(`../assets/img/houses/${stay3.imgUrls[0]}`)} />}

          <div className="city-details">
            <h3 className="color-city">Appartement lumineux     <span>Montreal</span></h3>
            <h4>

            </h4>
          </div>
        </div>
        </Link>
        <Link to={`/stay/details/${stay4._id}`}>

          <div className="card">
            {stay4 && <img src={require(`../assets/img/houses/${stay4.imgUrls[0]}`)} />}

            <div className="city-details">
              <h3 className="color-city">{stay4.name}        <span>Iceland</span></h3>
              <h4>

              </h4>
            </div>
          </div>
        </Link>
      </section> */}
    </section>
  )
}
