import React from 'react'
import LoadingDots from '../components/LoadingDots'
import { Row } from '../components/Table'
import styled from 'styled-components'

const LoadingWrapper = styled(Row) `
  flex-shrink: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #2A2A2A;
  font-size: 2em;
`

const Loading = () => (
  <LoadingWrapper>
    Loading<LoadingDots />
  </LoadingWrapper>
)

export default Loading
