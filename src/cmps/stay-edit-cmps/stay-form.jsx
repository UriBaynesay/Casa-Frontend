import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { stayService } from "../../services/stay.service"

export const StayForm = ({ stay, onSubmit, isAdd }) => {
  const {
    name,
    summary,
    interaction,
    amenities,
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
  const [images, setImages] = useState(Array(5).fill(null))
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
      inputLabel: "Cancellation policy",
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
    amenities: { value: amenities, inputLabel: "Amenities" },
  })

  const handleChange = ({ target }) => {
    const { name, value, id, checked, type } = target
    if (type === "checkbox") {
      setFields({
        ...fields,
        amenities: {
          value: !checked
            ? fields.amenities.value.filter((amenity) => amenity !== id)
            : [...fields.amenities.value, id],
          inputLabel: "Amenities",
        },
      })
    } else {
      setFields({
        ...fields,
        [name]: {
          ...fields[name],
          value: type === "number" ? +value : value,
        },
      })
    }
  }

  return (
    <form
      className="stay-edit-form-container"
      onSubmit={(ev) => {
        ev.preventDefault()
        console.log(ev)

        onSubmit(fields, images)
      }}
      encType="multipart/form-data"
    >
      <div className="form-inputs-container">
        {Object.keys(fields).map((key) => {
          return (
            <Box>
              {key === "amenities" ? (
                <></>
              ) : (
                <TextField
                  label={fields[key].inputLabel}
                  margin="dense"
                  name={key}
                  value={fields[key].value}
                  type={typeof fields[key].value}
                  placeholder={fields[key].inputLabel}
                  required={isAdd}
                  onChange={handleChange}
                />
              )}
            </Box>
          )
        })}
        <div className="amenities-container">
          {stayService.getAmenities().map((amenity) => (
            <label>
              <input
                onChange={handleChange}
                name="amenities"
                id={amenity}
                type="checkbox"
                checked={fields.amenities.value.includes(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>
        {isAdd && (
          <>
            {images.map((img, idx) => {
              return (
                <input
                  id={idx}
                  key={idx}
                  type="file"
                  accept="image/*"
                  required
                  onChange={({ target }) => {
                    const { id, value } = target
                    const newImgs = [...images]
                    newImgs[id] = value
                    setImages(newImgs)
                  }}
                />
              )
            })}
          </>
        )}
      </div>

      <Button className="submit-button" variant="outlined" type="submit">
        {isAdd ? "Add" : "Update"}
      </Button>
    </form>
  )
}
