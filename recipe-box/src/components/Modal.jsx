import React, { PropTypes } from 'react'
import ReactModal from 'react-modal'
import Button from '../components/Button'
import dataStore from '../utils/dataStore'

const styles = {
  Modal: {
    overlay: {
      backgroundColor: 'rgba(0, 100, 0, .4)'
    },
    content: {
      border: 0,
      borderRadius: 0,
      overflow: 'visible'
    }
  }
}

const Modal = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      ingredients: ''
    }
  },

  propTypes: {
    editing: PropTypes.bool,
    index: PropTypes.number,
    modalAction: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    updateLabel: PropTypes.string.isRequired,
  },

  handleRecipeTitle: function(e) {
    this.setState({
      title: e.target.value
    })
  },

  handleRecipeIngredients: function(e) {
    this.setState({
      ingredients: e.target.value
    })
  },

  handleSubmit: function(e) {
    e.preventDefault()
    let {title, ingredients} = this.state
    title = !title ? 'Untitled' : title
    let parsedIngredients = ingredients.split(',')
    if (this.props.editing) {
      dataStore[this.props.index].title = title
      dataStore[this.props.index].ingredients = parsedIngredients
    } else {
      dataStore.push({
        title: title, ingredients: parsedIngredients
      })
    }
    this.props.modalAction()
    this.props.handleUpdate()
  },

  afterOpen: function() {
    if (this.props.editing) {
      let { title, ingredients } = dataStore[this.props.index]
      this.setState({
        title: title,
        ingredients: ingredients.join(',')
      })
    } else {
      this.setState({
        title: '',
        ingredients: ''
      })
    }
  },

  requestClose: function() {
    this.setState({
      title: '',
      ingredients: ''
    })
  },

  render: function() {
    return (
      <ReactModal
        isOpen={this.props.modalState}
        onAfterOpen={this.afterOpen}
        onRequestClose={this.requestClose}
        contentLabel="New Recipe"
        style={styles.Modal} >
        <form className='recipeForm'>
          <div>
            <label htmlFor='recipeName'>
              Recipe Name:
            </label>
            {dataStore[this.props.index] ?
              <input
                type='text'
                value={this.state.title}
                id='recipeName'
                onChange={this.handleRecipeTitle} /> :
              <input
                type='text'
                id='recipeName'
                placeholder='Onion Pie'
                onChange={this.handleRecipeTitle} />
            }
          </div>
          <div>
            <label htmlFor='recipeIngredients'>
              Ingredients (seperated by comma)
            </label>
            <textarea
              type='textarea'
              value={this.state.ingredients}
              id='recipeIngredients'
              onChange={this.handleRecipeIngredients}
              placeholder='Onion, Pie Curst, Magic'/>
          </div>
          <Button
            label={this.props.updateLabel}
            handleClick={this.handleSubmit} />
        </form>
        <Button
          label='X'
          className='modalCloseButton'
          modalAction={this.props.modalAction}
          modalTrigger />
      </ReactModal>
    )
  }
})

export default Modal
