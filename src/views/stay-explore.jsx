import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { StayList } from "../cmps/stay-explore-cmps/stay-list.jsx"
import { loadStays, setFilterBy } from "../store/action/stay.action.js"
import { StayAppFilter } from "../cmps/stay-explore-cmps/stay-app-filter.jsx"
import { AppHeader } from "../cmps/app-header.jsx"

const StayExplore = () => {
  const { stays } = useSelector((storeState) => storeState.stayModule)
  const { filterBy } = useSelector((storeState) => storeState.stayModule)
  const [filterIconsOpen, setFilterIconsOpen] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(loadStays())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy])

  const onChangeFilter = (filterStaysBy) => {
    dispatch(setFilterBy(filterStaysBy))
    dispatch(loadStays())
    if (filterIconsOpen) onToggleSideBar()
  }

  const onToggleSideBar = () => {
    const elSideBar = document.querySelector(".icon-filters-container")
    elSideBar.style.display = filterIconsOpen ? "none" : "flex"
    setFilterIconsOpen(!filterIconsOpen)
  }

  return (
    <>
      <AppHeader theme={"stay-explore"} />
      <main className="main-layout">
        <div className="stay-app-container">
          <div className="filter-btn-container" onClick={onToggleSideBar}>
            <img src={require("../assets/img/Icons/filters.PNG")} alt="" loading="lazy"/>
          </div>
          <StayAppFilter onChangeFilter={onChangeFilter} />
          {stays && <StayList stays={stays} isUserStayPage={false}/>}
        </div>
      </main>
    </>
  )
}

export default StayExplore