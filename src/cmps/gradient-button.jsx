import React from "react"

export class GradientButton extends React.Component {

  componentDidMount() {
    let btn = document.querySelector(".mouse-cursor-gradient-tracking")
    btn.addEventListener("mousemove", (e) => {
      let rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      btn.style.setProperty("--x", x + "px")
      btn.style.setProperty("--y", y + "px")
    })
  }
  componentWillUnmount() {
    let btn = document.querySelector(".mouse-cursor-gradient-tracking")
    btn.removeEventListener("mousemove", (e) => {
      let rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      btn.style.setProperty("--x", x + "px")
      btn.style.setProperty("--y", y + "px")
    })
  }

  render() {
    const {txt,cb}=this.props
    return (
      <h3
        className="reserve-btn mouse-cursor-gradient-tracking"
        onClick={cb}
      >
        {txt}
      </h3>
    )
  }
}
