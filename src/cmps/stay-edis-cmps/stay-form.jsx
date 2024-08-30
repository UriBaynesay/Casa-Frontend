import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"

export const StayForm = ({ stay, onSubmit }) => {
  const {
    name,
    summary,
    interaction,
    houseRules,
    propertyType,
    roomType,
    bedType,
    cancellationPolicy,
    capacity,
    bedrooms,
    beds,
    bathrooms,
    price,
    securityDeposit,
  } = stay
  const [fields, setFields] = useState({
    name: { value: name, inputLabel: "Name" },
    summary: { value: summary, inputLabel: "Summary" },
    interaction: { value: interaction, inputLabel: "Interaction" },
    houseRules: { value: houseRules, inputLabel: "House rules" },
    propertyType: { value: propertyType, inputLabel: "Property type" },
    roomType: { value: roomType, inputLabel: "Room type" },
    bedType: { value: bedType, inputLabel: "Bed type" },
    cancellationPolicy: {
      value: cancellationPolicy,
      inputLabel: "Cancellatoin policy",
    },
    capacity: { value: capacity, inputLabel: "Capacity" },
    bedrooms: { value: bedrooms, inputLabel: "Number of bedrooms" },
    beds: { value: beds, inputLabel: "Number of beds" },
    bathrooms: { value: bathrooms, inputLabel: "Number of bathrooms" },
    price: { value: price, inputLabel: "$ Price" },
    securityDeposit: {
      value: securityDeposit,
      inputLabel: "$ Security deposit",
    },
  })

  const handleChange = ({ target }) => {
    const { name, value, type } = target
    setFields({
      ...fields,
      [name]: {
        ...fields[name],
        value: type === "number" ? +value : value,
      },
    })
  }

  return (
    <form
      className="stay-edit-form-container"
      onSubmit={(ev) => {
        ev.preventDefault()
        onSubmit(fields)
      }}
    >
      <div className="form-inputs-container">
        {Object.keys(fields).map((key) => (
          <Box key={key}>
            <TextField
              label={fields[key].inputLabel}
              margin="dense"
              name={key}
              value={fields[key].value}
              type={typeof fields[key].value}
              placeholder={fields[key].inputLabel}
              onChange={handleChange}
            />
          </Box>
        ))}
      </div>

      <Button className="submit-button" variant="outlined" type="submit">
        Update
      </Button>
    </form>
  )
}
