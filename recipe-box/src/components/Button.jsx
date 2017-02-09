import React from 'react'

const Button = (props) => {
  if (props.modalTrigger)
    return (
      <button type='button' style={props.style} onClick={props.modalAction}>
        <span>{props.label}</span>
      </button>
    )
  else
    return (
      <button type='button' style={props.style} onClick={props.handleClick}>
        <span>{props.label}</span>
      </button>
    )
}

export default Button
