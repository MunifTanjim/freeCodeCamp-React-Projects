import React, { PropTypes } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const RecipePanel = React.createClass({
  getInitialState: function() {
    return {
      showModal: false
    }
  },

  propTypes: {
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  },

  handleModalTrigger: function() {
    this.setState({
      showModal: !this.state.showModal
    })
  },

  render: function() {
    return (
      <div className='recipePanel'>
        <Button
          label='Delete'
          className='recipePanelButton'
          handleClick={this.props.handleDelete} />
        <Button
          label='Edit'
          className='recipePanelButton'
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
