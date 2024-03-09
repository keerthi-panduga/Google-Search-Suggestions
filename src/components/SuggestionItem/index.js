import './index.css'

const SuggestionItem = props => {
  return (
    <li className="suggestion-item">
      <p className="suggestion-text"></p>
      <button className="arrow-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
