import React, { PropTypes } from 'react'
import { Row, IndexCell, NumberCell, TextCell } from '../components/Table'
import styled from 'styled-components'

const Avatar = styled.img `
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: .4em;
  transition: .1s all;
`

const Group = styled.a `
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-decoration: none;
  color: #2A2A2A;
  outline: 0;

  &:hover,
  &:focus {
    img {
      transform: rotate(-60deg);
    }
  }
`

const Camper = (props) => (
  <Row>
    <IndexCell>
      <span>{props.index}</span>
    </IndexCell>
    <TextCell>
      <Group href={`https://www.freecodecamp.com/${props.data.username}`}>
        <Avatar src={props.data.img} />
        <span>{props.data.username}</span>
      </Group>
    </TextCell>
    <NumberCell>
      <span>{props.data.recent}</span>
    </NumberCell>
    <NumberCell>
      <span>{props.data.alltime}</span>
    </NumberCell>
  </Row>
)

export default Camper

Camper.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
