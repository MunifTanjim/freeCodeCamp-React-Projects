import React, { PropTypes } from 'react'

const IngredientList = React.createClass({
  propTypes: {
    data: PropTypes.array.isRequired,
  },

  render: function() {
    return (
      <ul className='ingredientList'>
        {this.props.data.map((item, index) => (
          <li key={index} className='ingredient'>
            {item}
          </li>
        ))}
      </ul>
    )
  }
})

export default IngredientList
