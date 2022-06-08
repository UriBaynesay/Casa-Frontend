import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Hero } from "./hero.jsx"
import { setFilterBy } from "../store/action/stay.action.js"
import { PopDestination } from "../cmps/pop-destination.jsx"
import { TopRated } from "../cmps/top-rated.jsx"

export const Homepage = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  function onSetFilter(destination) {
    dispatch(setFilterBy({ stayLocation: destination }))
    navigate("/stays")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="homepage-container">
      <Hero/>
      <PopDestination onSetFilter={onSetFilter} />
      <TopRated />
    </main>
  )
}
