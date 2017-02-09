import React from 'react'
import RecipeItem from '../components/RecipeItem'
import IngredientListContainer from '../containers/IngredientListContainer'
import dataStore from '../utils/dataStore'

const styles = {
  RecipeItemContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '80%',
    margin: '1em'
  },
  RecipeTitle: {
    padding: '0 30px',
    fontSize: '1.5em'
  }
}

const RecipeItemContainer = React.createClass({
  getInitialState: function() {
    return {
      active: false,
      classes: 'recipe',
      index: this.props.index
    }
  },
  handleClick: function(e) {
    e.preventDefault()
    this.setState({
      active: !this.state.active,
      classes: !this.state.active ? 'recipe active' : 'recipe'
    })
  },
  handleDelete: function(e) {
    e.preventDefault()
    dataStore.splice(this.state.index, 1)
    this.props.handleUpdate()
  },
  handleEdit: function(e) {
    e.preventDefault()
    console.log(dataStore[this.state.index].title)
    console.log(dataStore[this.state.index].ingredients)
    this.props.handleUpdate()
  },
  render: function() {
    return (
      <li className={this.state.classes} style={styles.RecipeItemContainer}>
        <RecipeItem handleClick={this.handleClick}>
          <h3 style={styles.RecipeTitle}>
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
