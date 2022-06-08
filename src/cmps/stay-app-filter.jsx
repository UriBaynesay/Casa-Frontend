import React, { useState } from "react"

import { stayService } from "../services/stay.service"

export function StayAppFilter({ onChangeFilter }) {
  const filterNames = stayService.getLabels()

  const handleSetFilter = (label) => {
    onChangeFilter({ label })
  }

  return (
    <div className="icon-filters-container">
      {filterNames.map((filter) => {
        return (
          <div className="filter-container" onClick={() => handleSetFilter(filter)}>
            <div className="icon-container">
              <img
                key={filter}
                src={require(`../assets/img/filters/${filter}.jpg`)}
                alt=""
              ></img>
            </div>
            <span className="filter-name">{filter}</span>
          </div>
        )
      })}
    </div>
  )
}
