import React from 'react'
import IngredientList from '../components/IngredientList'
import RecipePanel from '../components/RecipePanel'

const styles = {
  IngredientListContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    background: '#b5bfd0'
  }
}

const IngredientListContainer = React.createClass({
  render: function() {
    return (
      <div style={styles.IngredientListContainer}>
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
