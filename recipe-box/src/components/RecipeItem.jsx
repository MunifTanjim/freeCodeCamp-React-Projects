import React from 'react'

const styles = {
  RecipeItem: {
    width: '100%'
  }
}

const RecipeItem = (props) => (
  <button
    className="button"
    style={styles.RecipeItem}
    onClick={props.handleClick} >
    {props.children}
  </button>
)

export default RecipeItem
