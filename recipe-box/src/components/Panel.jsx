import React from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const styles = {
  ModalTriggerButtonOpen: {
    background: '#5b7093',
    color: '#fff',
    border: 0,
    fontSize: '1.25em',
    padding: '.75em'
  }
}

const Panel = React.createClass({
  getInitialState: function() {
    return {showModal: false}
  },
  handleModalTrigger: function() {
    this.setState({
      showModal: !this.state.showModal
    })
  },
  render: function() {
    return (
      <section>
        <Button
          label='Add Recipe'
          style={styles.ModalTriggerButtonOpen}
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
