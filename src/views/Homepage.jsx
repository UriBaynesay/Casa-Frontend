import { useEffect } from "react"

import { Hero } from "../cmps/homepage_cmp/hero.jsx"
import { PopDestination } from "../cmps/homepage_cmp/pop-destination.jsx"
import { TopRated } from "../cmps/homepage_cmp/top-rated.jsx"

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
