import { useEffect } from "react"

import { Hero } from "../cmps/hero"
import { PopDestination } from "../cmps/pop-destination.jsx"
import { TopRated } from "../cmps/top-rated.jsx"

export const Homepage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="homepage">
      <Hero/>
      <PopDestination />
      <TopRated />
    </main>
  )
}
