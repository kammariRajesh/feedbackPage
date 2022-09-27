// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  cardChange = () => {
    const {changeCard} = this.props
    changeCard()
  }

  render() {
    const {item} = this.props
    const {name, imageUrl} = item
    return (
      <li>
        <div className="emoji-container">
          <img
            src={imageUrl}
            alt={name}
            className="emoji"
            onClick={this.cardChange}
          />
          <p>{name}</p>
        </div>
      </li>
    )
  }
}
export default Feedback
