import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { StayList } from "../cmps/stay-list"
import { loadStays, setFilterBy } from "../store/action/stay.action"
import { StayAppFilter } from "../cmps/stay-app-filter.jsx"

export const StayApp = () => {
  const { stays } = useSelector((storeState) => storeState.stayModule)
  const { filterBy } = useSelector((storeState) => storeState.stayModule)

  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(loadStays())
  }, [filterBy])

  const onChangeFilter = (filterStaysBy) => {
    dispatch(setFilterBy(filterStaysBy))
    dispatch(loadStays())
  }

  return (
    <main className="main-layout">
      <div className="stay-app-container">
        <StayAppFilter onChangeFilter={onChangeFilter} />
        {stays && <StayList stays={stays} />}
      </div>
    </main>
  )
}
