import { Component } from "react"
import Avatar from "@mui/material/Avatar"

export class AddReview extends Component {
  state = {
    txt: "",
  }

  handleChange = ({ target }) => {
    const { value } = target
    this.setState({ txt: value })
  }

  render() {
    const { txt } = this.state
    const { loggedinUser, addReview } = this.props
    const imgUrl = loggedinUser ? loggedinUser.imgUrl : ""
    const fullname = loggedinUser ? loggedinUser.fullname : "Guest"

    return (
      <section className="add-review-container">
        <h2>Add Review</h2>
        <div className="loggedin-user">
          <Avatar src={imgUrl} />

          <h3>{fullname}</h3>
        </div>

        <textarea
          type="text"
          name="txt"
          autoComplete="off"
          onChange={this.handleChange}
          value={txt}
          placeholder="Add your review..."
        />

        <button
          onClick={() => {
            addReview(txt)
            this.setState({ txt: "" })
          }}
        >
          {" "}
          Send{" "}
        </button>
      </section>
    )
  }
}
