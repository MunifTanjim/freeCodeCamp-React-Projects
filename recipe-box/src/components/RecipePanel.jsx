import React from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const styles = {
  RecipePanel: {
    width: '20%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around'
  },
  ButtonDeleteRecipe: {
    background: '#5b7093',
    border: 0,
    padding: '.5em',
    color: '#fff'
  },
  ButtonEditRecipe: {
    background: '#5b7093',
    border: 0,
    padding: '.5em',
    color: '#fff'
  }
}

const RecipePanel = React.createClass({
  getInitialState: function() {
    return {
      showModal: false
    }
  },
  handleModalTrigger: function() {
    this.setState({
      showModal: !this.state.showModal
    })
  },
  render: function() {
    return (
      <div style={styles.RecipePanel}>
        <Button
          label='Delete'
          style={styles.ButtonDeleteRecipe}
          handleClick={this.props.handleDelete} />
        <Button
          label='Edit'
          style={styles.ButtonEditRecipe}
          modalAction={this.handleModalTrigger}
          modalTrigger />
        <Modal
          modalState={this.state.showModal}
          modalAction={this.handleModalTrigger}
          handleUpdate={this.props.handleUpdate}
          updateLabel='Edit'
          index={this.props.index}
          editing />
      </div>
    )
  }
})

export default RecipePanel
