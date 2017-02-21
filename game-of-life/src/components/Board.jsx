import React, { PropTypes } from 'react'
import Cell from '../components/Cell'
import { gStatus } from '../utils/gameFunctions'

const Board = (props) => (
  <div className='boardWrapper'>
    <section className='board'>
      {props.lifes.map((isAlive,index) => (
        <Cell
          key={index}
          index={index}
          status={gStatus.life[isAlive]}
          handleClick={props.handleToggleLife}/>
      ))}
    </section>
  </div>
)

export default Board

Board.propTypes = {
  lifes: PropTypes.array.isRequired,
  handleToggleLife: PropTypes.func.isRequired,
}
