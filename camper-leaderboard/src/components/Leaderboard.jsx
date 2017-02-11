import React, { PropTypes } from 'react'
import Camper from '../components/Camper'
import { Row } from '../components/Table'
import Loading from '../components/Loading'

const Leaderboard = (props) => {
  return props.isLoading ? (
    <Loading />
  ) : (
    <div>
      {props.data.map((data,index) => (
        <Camper
          key={index}
          index={index+1}
          data={data} />
      ))}
    </div>
  )
}

export default Leaderboard

Leaderboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}
