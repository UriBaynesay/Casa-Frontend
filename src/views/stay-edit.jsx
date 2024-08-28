import { useEffect, useState } from "react"
import { AppHeader } from "../cmps/app-header"
import { stayService } from "../services/stay.service"
import { useParams } from "react-router-dom"
import { Box, Button, TextField } from "@mui/material"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

export const StayEdit = () => {
  const [fields, setFields] = useState()
  const { stayId } = useParams()

  useEffect(() => {
    fetchFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stayId])

  const fetchFields = async () => {
    try {
      const fetchedStay = await stayService.getById(stayId)
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
      } = fetchedStay
      setFields({
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
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = ({ target }) => {
    const { name, value, type } = target
    setFields({
      ...fields,
      [name]: { ...fields[name], value: type === "number" ? +value : value },
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const cleandField = {}
    Object.keys(fields).forEach((key) => (cleandField[key] = fields[key].value))
    try {
      await stayService.updateStay(stayId, cleandField)
      showSuccessMsg("Updated stay succesfully")
    } catch (error) {
      showErrorMsg(error)
    }
  }

  return (
    <>
      <AppHeader />
      <main className="stay-edit-container become-host-layout">
        {fields && (
          <form className="stay-edit-form-container" onSubmit={handleSubmit}>
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
        )}
      </main>
    </>
  )
}
