import React from 'react'
import LeaderboardContainer from '../containers/LeaderboardContainer'
import Branding from '../components/Branding'
import styled from 'styled-components'

import '../static/stylesheets/style'

const AppWrapper = styled.div `
  display: flex;
  flex-flow: column nowrap;
  height: 100%
`

const App = () => (
  <AppWrapper>
    <Branding />
    <LeaderboardContainer />
  </AppWrapper>
)

export default App
