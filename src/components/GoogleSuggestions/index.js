import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="google-suggestion-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestion-con">
            <div className="search-input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
              />
            </div>
            <ul className="suggestions-list">
              <SuggestionItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
