import React, { PropTypes } from 'react'
import Button from '../components/Button'
import SpeedControl from '../components/SpeedControl'

const ControlBar = (props) => (
  <div className='controlBar'>
    <div className='left'>
      <Button
        icon={props.isRunning ? 'pause' : 'run' }
        handleClick={props.handleToggle} />
      <Button
        icon='clear'
        handleClick={props.handleClear} />
      <Button
        icon='random'
        handleClick={props.handleRandom} />
    </div>
    <div className='center'>
      <strong>Generation: {props.generation}</strong>
    </div>
    <div className='right'>
      <SpeedControl
        speed={props.speed}
        handleChange={props.handleSpeedChange} />
    </div>
  </div>
)

export default ControlBar

ControlBar.propTypes = {
  generation: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleRandom: PropTypes.func.isRequired,
  handleSpeedChange: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
}
