import React, { PropTypes } from 'react'
import Button from '../components/Button'
import { gStatus } from '../utils/gameFunctions'

const SpeedControl = (props) => (
  <div className='speedControl'>
    <Button
      icon={props.speed===0 ? 'less' : 'less-o' }
      handleClick={props.handleChange.bind(null, -1)}
    />
    <strong>{gStatus.speedPhrase[props.speed]}</strong>
    <Button
      icon={props.speed===2 ? 'more' : 'more-o' }
      handleClick={props.handleChange.bind(null, +1)}
    />
  </div>
)

export default SpeedControl

SpeedControl.propTypes = {
  handleChange: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
}
