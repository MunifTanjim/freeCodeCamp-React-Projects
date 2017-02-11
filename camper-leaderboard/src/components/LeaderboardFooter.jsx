import React from 'react'
import styled from 'styled-components'

const Byline = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #006400;
  color: #fff;
  height: 2em;
  white-space: pre;
`
const A = styled.a `
  text-decoration: none;
  color: #eee;
  outline: 0;

  &:hover,
  &:focus {
    color: #fff;
  }
`


const LeaderboardFooter = () => {
  return (
    <Byline>
      Designed by {' '}
      <A href='https://www.freecodecamp.com/MunifTanjim'>MunifTanjim</A>
    </Byline>
  )
}

export default LeaderboardFooter
