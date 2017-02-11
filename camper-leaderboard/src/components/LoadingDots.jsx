import React, { Component } from 'react'

class LoadingDots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dots: ''
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.dots === '.....')
        this.setState({
          dots: ''
        })
      else
        this.setState({
          dots: this.state.dots + '.'
        })
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <span>{this.state.dots}</span>
    )
  }
}

export default LoadingDots
