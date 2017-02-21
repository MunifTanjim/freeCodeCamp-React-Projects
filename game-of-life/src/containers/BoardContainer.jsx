import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import ControlBar from '../components/ControlBar'
import Board from '../components/Board'
import Footer from '../components/Footer'
import game, { controls, gStatus } from '../utils/gameFunctions'

class BoardContainer extends Component {
  constructor(props) {
    super(props)

    this.totalCells = props.size.col * props.size.row
    this.isRunning = false
    this.speed = 1
    this.lifes = []
    this.generation = 0
    this.companions = game.companionGroups(props.size)

    this.run = controls.run.bind(this)
    this.pause = controls.pause.bind(this)
    this.toggle = controls.toggle.bind(this)
    this.clear = controls.clear.bind(this)
    this.random = controls.random.bind(this)
    this.speedChange = controls.speed.bind(this)

    this.updateBoard = game.updateBoard.bind(this)
    this.nextGeneration = game.nextGeneration.bind(this)
    this.handleToggleLife = game.handleToggleLife.bind(this)

    this.random()

    this.state = {
      lifes: this.lifes,
      speed: this.speed,
      isRunning: this.isRunning
    }
  }

  componentDidMount() {
    this.run()
  }

  componentWillUnmount() {
    this.pause()
  }

  render() {
    let sizeClass = gStatus.size[this.props.size.col]
    return (
      <div className={`app ${sizeClass}`}>
        <Header />
        <ControlBar
          generation={this.generation}
          handleToggle={this.toggle}
          handleClear={this.clear}
          handleRandom={this.random}
          handleSpeedChange={this.speedChange}
          isRunning={this.state.isRunning}
          speed={this.state.speed} />
        <Board
          lifes={this.state.lifes}
          handleToggleLife={this.handleToggleLife} />
        <Footer />
      </div>
    )
  }
}

export default BoardContainer

BoardContainer.propTypes = {
  size: PropTypes.shape({
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
  }).isRequired,
}
