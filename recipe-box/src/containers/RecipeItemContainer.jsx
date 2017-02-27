import React, { PropTypes } from 'react'
import RecipeItem from '../components/RecipeItem'
import IngredientListContainer from '../containers/IngredientListContainer'
import dataStore from '../utils/dataStore'

const RecipeItemContainer = React.createClass({
  getInitialState: function() {
    return {
      active: false,
      index: this.props.index
    }
  },

  propTypes: {
    data: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  },

  handleClick: function(e) {
    e.preventDefault()
    this.setState({
      active: !this.state.active,
    })
  },

  handleDelete: function(e) {
    e.preventDefault()
    dataStore.splice(this.state.index, 1)
    this.props.handleUpdate()
  },

  handleEdit: function(e) {
    e.preventDefault()
    this.props.handleUpdate()
  },

  render: function() {
    return (
      <li className={`recipeItem ${this.state.active ? 'active' : ''}`}>
        <RecipeItem handleClick={this.handleClick}>
          <h3>
            {this.props.data.title}
          </h3>
        </RecipeItem>
        {this.state.active &&
          <IngredientListContainer
            data={this.props.data.ingredients}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleUpdate={this.props.handleUpdate}
            index={this.state.index} />
        }
      </li>
    )
  }
})

export default RecipeItemContainer
