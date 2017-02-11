import React, { PropTypes } from 'react'
import { Caption } from '../components/Table'
import LoadingDots from '../components/LoadingDots'
import styled from 'styled-components'

const Title = styled.button `
  font-size: 1.5em;
`

const LeaderboardCaption = (props) => (
  <Caption>
    <Title onClick={props.handleRefresh}>
      Camper Leaderboard
      {props.refreshing && <LoadingDots />}
    </Title>
  </Caption>
)

export default LeaderboardCaption

LeaderboardCaption.propTypes = {
  handleRefresh: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
}
