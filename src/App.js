import {Component} from 'react'

import Feedback from './components/Feedback/index'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

const {emojis, loveEmojiUrl} = resources

class App extends Component {
  state = {className1: 'display', className2: 'display-none'}

  changeCard = () =>
    this.setState({className1: 'display-none', className2: 'display'})

  render() {
    const {className1, className2} = this.state
    return (
      <div className="bg-container">
        <div className={`card1 ${className1}`} id="c-1">
          <h1>How satisfied are you with our customer support performance ?</h1>
          <ul className="list-container">
            {emojis.map(each => (
              <Feedback
                item={each}
                loveEmojiUrl={loveEmojiUrl}
                changeCard={this.changeCard}
                key={each.id}
              />
            ))}
          </ul>
        </div>
        <div className={`card1 ${className2}`} id="c-2">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default App
