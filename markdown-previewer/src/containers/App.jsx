import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../containers/Main'

import '../static/stylesheets/style'

const styles = {
  appWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%'
  }
}

const App = () => (
  <div style={styles.appWrapper}>
    <Navbar />
    <Main />
  </div>
)

export default App
