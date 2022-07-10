import { Component } from "react"
import Avatar from "@mui/material/Avatar"

export class AddReview extends Component {
  state = {
    review: {
      txt: "",
    },
  }

  handleChange = ({ target }) => {
    const { value } = target
    this.setState({ review: { ...this.state.review, txt: value } })
  }

  render() {
    const { review } = this.state
    const { loggedinUser } = this.props
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
          value={review.txt}
          placeholder="Add your review..."
        />

        <button> Send </button>
      </section>
    )
  }
}
