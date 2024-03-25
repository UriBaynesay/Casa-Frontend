import React, { useState, useEffect } from "react"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"

export function SearchByDate(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndtDate] = useState(new Date())

  useEffect(() => {
    props.onSetDates(startDate, endDate)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate])

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndtDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      minDate={new Date()}
      rangeColors={["#222222"]}
      onChange={handleSelect}
    />
  )
}
