import React, { Component } from 'react'
import BoardContainer from '../containers/BoardContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: { col: 50, row: 30 },
    }
  }

  onSizeChange(col,row) {
    this.setState({
      size: { col: col, row: row },
    })
  }

  render() {
    return (
      <BoardContainer size={this.state.size} />
    )
  }
}

export default App
