import React, { PropTypes } from 'react'

const Cell = (props) => (
  <div className={`cell ${props.status}`}>
    <div
      id={props.index}
      onClick={props.handleClick} />
  </div>
)

export default Cell

Cell.propTypes = {
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}
