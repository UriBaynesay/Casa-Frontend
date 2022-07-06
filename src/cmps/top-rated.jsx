import { useEffect, useState } from "react"

import { stayService } from "../services/stay.service"
import { TopRatedList } from "./top-rated-list"

export function TopRated() {
  const [stays, setStays] = useState(null)

  useEffect(() => {
    loadStays()
  }, [])

  const loadStays = async () => {
    try {
      const topRatedStays = await stayService.getTopRated()
      setStays(topRatedStays)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section className="top-rated main-layout">
      {stays ? (
        <div className="top-rated-container">
          <h1 className="title">Top Rated</h1>
          <TopRatedList stays={stays} />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  )
}
