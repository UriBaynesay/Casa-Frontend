import { useEffect, useState } from "react"

import { stayService } from "../services/stay.service"
import { TopRatedList } from "./top-rated-list"

export function TopRated() {
  const [stays, setStays] = useState(null)

  useEffect(() => {
    loadStays()
  }, [])

  const loadStays = async () => {
    setStays(await stayService.getTopRated())
  }

  if (!stays) return <section className="top-rated-container"></section>

  return (
    <section className="top-rated homepage-layout">
      <div className="top-rated-container">
        <h1 className="title">Top Rated</h1>
        <TopRatedList stays={stays} />
      </div>
    </section>
  )
}
