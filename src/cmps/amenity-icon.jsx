import {
  AiOutlineHome,
  AiOutlineWifi,
  AiOutlineCheckSquare,
} from "react-icons/ai"
import { BiCameraHome, BiBath } from "react-icons/bi"
import { TiKeyOutline } from "react-icons/ti"
import { HiOutlineLocationMarker, HiOutlineSparkles } from "react-icons/hi"
import { FiMonitor, FiSpeaker } from "react-icons/fi"
import { FaTemperatureLow, FaSwimmingPool } from "react-icons/fa"
import {
  MdOutlineTakeoutDining,
  MdOutlineBeachAccess,
  MdOutlinePets,
  MdOutlineLocalLaundryService,
  MdOutlineElevator,
  MdOutlineLuggage,
  MdOutlineMicrowave,
  MdOutlineIron,
  MdOutlineCoffeeMaker,
} from "react-icons/md"
import { CgSmartHomeWashMachine, CgSmartHomeRefrigerator } from "react-icons/cg"
import { GiCigarette } from "react-icons/gi"
export const AmenityIcon = ({ iconType }) => {
  switch (iconType) {
    case "TV":
      return (
        <div className="amenity-icon-container">
          {" "}
          <FiMonitor /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "TV with standard cable":
      return (
        <div className="amenity-icon-container">
          {" "}
          <FiMonitor /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Wifi":
      return (
        <div className="amenity-icon-container">
          {" "}
          <AiOutlineWifi /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Kitchen":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineTakeoutDining /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Cooking basics":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineTakeoutDining /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Washer":
      return (
        <div className="amenity-icon-container">
          {" "}
          <CgSmartHomeWashMachine /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Paid washer - In building":
      return (
        <div className="amenity-icon-container">
          {" "}
          <CgSmartHomeWashMachine /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Beach access":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineBeachAccess /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Beach access - Beachfront":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineBeachAccess /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Pets allowed":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlinePets /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Sound system with aux":
      return (
        <div className="amenity-icon-container">
          {" "}
          <FiSpeaker /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Dryer":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineLocalLaundryService /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Security cameras on property":
      return (
        <div className="amenity-icon-container">
          {" "}
          <BiCameraHome /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "AC":
      return (
        <div className="amenity-icon-container">
          {" "}
          <FaTemperatureLow /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Elevator":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineElevator /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Luggage drop off allowed":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineLuggage /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Smoking allowed":
      return (
        <div className="amenity-icon-container">
          {" "}
          <GiCigarette /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Bathtub":
      return (
        <div className="amenity-icon-container">
          {" "}
          <BiBath /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Refrigerator":
      return (
        <div className="amenity-icon-container">
          {" "}
          <CgSmartHomeRefrigerator /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Microwave":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineMicrowave /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Pool":
      return (
        <div className="amenity-icon-container">
          {" "}
          <FaSwimmingPool /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Iron":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineIron /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
    case "Coffee maker":
      return (
        <div className="amenity-icon-container">
          {" "}
          <MdOutlineCoffeeMaker /> <span className="amenity-txt">{iconType}</span>
        </div>
      )

    default:
      return (
        <div className="amenity-icon-container">
          <AiOutlineCheckSquare /> <span className="amenity-txt">{iconType}</span>
        </div>
      )
  }
}
