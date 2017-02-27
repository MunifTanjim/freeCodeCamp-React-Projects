import React, { PropTypes } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const Panel = React.createClass({
  getInitialState: function() {
    return {showModal: false}
  },

  propTypes: {
    handleUpdate: PropTypes.func.isRequired,
  },

  handleModalTrigger: function() {
    this.setState({
      showModal: !this.state.showModal
    })
  },

  render: function() {
    return (
      <section className='bottomPanel'>
        <Button
          label='Add Recipe'
          className='addRecipeButton'
          modalAction={this.handleModalTrigger}
          modalTrigger />
        <Modal
          modalState={this.state.showModal}
          modalAction={this.handleModalTrigger}
          updateLabel='Add'
          handleUpdate={this.props.handleUpdate} />
      </section>
    )
  }
})

export default Panel
