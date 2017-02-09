import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

require('./static/stylesheet/style')

render(
  <App />,
  document.getElementById('app')
)
