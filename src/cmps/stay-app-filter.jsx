import React, { useState } from "react"

import { stayService } from "../services/stay.service"
import { FilterIconPreview } from "./filter-icon-preview";

export function StayAppFilter({ onChangeFilter }) {
  const filterNames = stayService.getLabels()

  const handleSetFilter = (label) => {
    onChangeFilter({ label })
  }

  return (
    <div className="icon-filters-container">
      {filterNames.map((iconFilter) => {
        return (
          <FilterIconPreview
            iconFilter={iconFilter}
            handleSetFilter={handleSetFilter}
          />
        )
      })}
    </div>
  )
}
