import React, { PropTypes } from 'react'

const Button = (props) => ( props.modalTrigger ? (
  <button
    type='button'
    className={props.className}
    onClick={props.modalAction} >
    <span>{props.label}</span>
  </button>
) : (
  <button
    type='button'
    className={props.className}
    onClick={props.handleClick} >
    <span>{props.label}</span>
  </button>
))

export default Button

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  modalAction: PropTypes.func,
  modalTrigger: PropTypes.bool
}
