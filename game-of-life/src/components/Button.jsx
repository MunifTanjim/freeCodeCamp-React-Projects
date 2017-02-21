import React, { PropTypes } from 'react'
import Icon from '../components/Icon'

const Button = (props) => {
  return (
    <button
      className={`control ${props.icon}`}
      onClick={props.handleClick} >
      <Icon icon={props.icon} />
    </button>
  )
}

export default Button

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
