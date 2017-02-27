import React, { PropTypes } from 'react'

const RecipeItem = (props) => (
  <button
    className="button"
    onClick={props.handleClick} >
    {props.children}
  </button>
)

export default RecipeItem

RecipeItem.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
}
