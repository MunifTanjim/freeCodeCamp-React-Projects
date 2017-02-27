import React, { PropTypes } from 'react'
import IngredientList from '../components/IngredientList'
import RecipePanel from '../components/RecipePanel'

const IngredientListContainer = React.createClass({
  propTypes: {
    data: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  },

  render: function() {
    return (
      <div className='ingredientListWrapper'>
        <IngredientList
          data={this.props.data} />
        <RecipePanel
          handleDelete={this.props.handleDelete}
          handleUpdate={this.props.handleUpdate}
          index={this.props.index} />
      </div>
    )
  }
})

export default IngredientListContainer
