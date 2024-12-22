import { AppHeader } from "../cmps/app-header"
import { StayForm } from "../cmps/stay-edit-cmps/stay-form"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { stayService } from "../services/stay.service"

const StayAdd = () => {
  const mockStay = {
    name: "",
    summary: "",
    interaction: "",
    address:{
      street:"",
      city:"",
      country:""
    },
    houseRules: "",
    propertyType: "",
    roomType: "",
    bedType: "",
    cancellationPolicy: "",
    capacity: 0,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    price: 0,
    securityDeposit: 0,
    amenities: [],
    imgUrls: [],
  }

  const onSubmit = async (form) => {
    const cleandField = new FormData(form)
    try {
      await stayService.addStay(cleandField)
      showSuccessMsg("Added stay succesfully")
    } catch (error) {
      showErrorMsg(error)
    }
  }
  return (
    <>
      <AppHeader />
      <main className="stay-edit-container">
        <StayForm stay={mockStay} onSubmit={onSubmit} isAdd={true}></StayForm>
      </main>
    </>
  )
}

export default StayAdd