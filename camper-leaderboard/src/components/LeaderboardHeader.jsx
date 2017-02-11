import React, { PropTypes } from 'react'
import SortingButton from '../components/SortingButton'
import { Header, IndexCell, NumberCell, TextCell } from '../components/Table'


const LeaderboardHeader = (props) => (
  <Header>
    <IndexCell>
      <span>#</span>
    </IndexCell>
    <TextCell>
      <span>Camper Username</span>
    </TextCell>
    <NumberCell>
      <SortingButton
        label='30 Days'
        value='recent'
        handleClick={props.handleSortingChange}
        sorting={props.sorting} />
    </NumberCell>
    <NumberCell>
      <SortingButton
        label='All time'
        value='alltime'
        handleClick={props.handleSortingChange}
        sorting={props.sorting} />
    </NumberCell>
  </Header>
)

export default LeaderboardHeader

LeaderboardHeader.propTypes = {
  handleSortingChange: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired
}
