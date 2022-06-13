import React from "react"
import { connect } from "react-redux"

import { orderService } from "../services/order.service"
import { utilService } from "../services/util.service";
import { showUserMsg } from "../services/event-bus.service"
import { GuestModal } from "./search-by-guest-modal"
import { ReserveDateModal } from "./reserve-date-modal"
import { GradientButton } from "./gradient-button"
import starIcon from "../assets/img/svgs/star.svg"
export class _Reserve extends React.Component {
  state = {
    dates: null,
    isDateModalOpen: false,
    isGuestModalOpen: false,
    guestCount: 0,
  }

  setGuestCount = (guestCount) => {
    this.setState({ ...this.state, guestCount })
  }

  onSetDates = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr)
    const endDate = new Date(endDateStr)
    if (startDate.getDate() === endDate.getDate()) return
    const startDateStamp = startDate.getTime()
    const endDateStamp = endDate.getTime()
    this.setState({
      dates: { endDateStamp, startDateStamp },
      isDateModalOpen: false,
    })
  }

  onReserve = async () => {
    const { user, stayId, hostId ,price } = this.props
    const { dates , guestCount } = this.state
    if (!user) {
      showUserMsg("Please login")
      return
    }
    if (!dates.endDateStamp || !dates.startDateStamp) {
      showUserMsg("Please select dates")
      this.setState({
        ...this.state,
        isDateModalOpen: true,
      })
      return
    }
    try {
      await orderService.saveOrder({
        price: ((dates.endDateStamp - dates.startDateStamp) / 86400000) * price,
        hostId,
        stayId,
        guestCount,
        startDate: dates.startDateStamp,
        endDate: dates.endDateStamp,
      })
      showUserMsg("Order sent")

    } catch (err) {
      if (err === "not availble") showUserMsg("No available dates")
    }
  }

  render() {
    const { dates, isDateModalOpen, isGuestModalOpen, guestCount } = this.state
    const { price, rating, reviewsLength } = this.props
    return (
      <section className="reserve-container">
        <div className="reserve-modal">
          <div className="top-info">
            <h1>
              ${price} <span className="night-container">night</span>
            </h1>
            <div className="stats">
              <span>
                <img width="14px" src={starIcon} alt="" />{" "}
                {(rating / 100).toFixed(1) * 5} ·
              </span>
              <span className="reviews"> {reviewsLength} reviews</span>
            </div>
          </div>

          <div
            className={`order-datepicker-guest ${
              isDateModalOpen || isGuestModalOpen ? "active" : ""
            }`}
          >
            <div
              className="date-picker-modal"
              onClick={() =>
                this.setState({
                  ...this.state,
                  isDateModalOpen: !isDateModalOpen,
                })
              }
            >
              <ReserveDateModal
                dates={dates}
                isDateModalOpen={isDateModalOpen}
                onSetDates={this.onSetDates}
              />
            </div>

            <h3
              className="guests-title"
              onClick={() => {
                this.setState({
                  ...this.state,
                  isGuestModalOpen: !isGuestModalOpen,
                })
              }}
            >
              {guestCount ? guestCount + " guests" : "Guests"}
            </h3>
            {isGuestModalOpen && (
              <GuestModal
                setGuests={this.setGuestCount}
                maxGuests={this.props.numOfGuest}
                onCloseModal={() => {
                  this.setState({ ...this.state, isGuestModalOpen: false })
                }}
              />
            )}
          </div>

          <GradientButton txt="Reserve" cb={this.onReserve} />

          <h4>You won't be charged yet.</h4>
          <div className="total-container">
            <h3>Total</h3>
            <h3>
              $
              {dates !== null
                ? utilService.numberWithCommas(
                    ((dates.endDateStamp - dates.startDateStamp) / 86400000) *
                      price
                  )
                : "0"}
            </h3>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userModule.user,
  }
}

const mapDispatchToProps = {}

export const Reserve = connect(mapStateToProps, mapDispatchToProps)(_Reserve)

