import React, { Component } from 'react'
import LeaderboardCaption from '../components/LeaderboardCaption'
import LeaderboardHeader from '../components/LeaderboardHeader'
import Leaderboard from '../components/Leaderboard'
import LeaderboardFooter from '../components/LeaderboardFooter'
import { Table } from '../components/Table'
import api from '../utils/api'

class LeaderboardContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
      refreshing: false,
      sorting: 'recent'
    }

    this._sort = this._sort.bind(this)
    this._refresh = this._refresh.bind(this)
    this._handleSortingChange = this._handleSortingChange.bind(this)
  }

  componentDidMount() {
    this._sort(this.state.sorting)
  }

  _sort(sorting) {
    api[sorting]()
      .then(res => {
        this.setState({
          data: res.data,
          loading: false,
          refreshing: false,
          sorting: sorting
        })
      })
  }

  _refresh(e) {
    e.preventDefault()
    this.setState({
      refreshing: true
    }, this._sort(this.state.sorting))
  }

  _handleSortingChange(e) {
    e.preventDefault()
    this.setState({
      refreshing: true
    }, this._sort(e.target.value))
  }

  render() {
    return (
      <Table>
        <LeaderboardCaption
          refreshing={this.state.refreshing}
          handleRefresh={this._refresh} />
        <LeaderboardHeader
          sorting={this.state.sorting}
          handleSortingChange={this._handleSortingChange} />
        <Leaderboard
          data={this.state.data}
          isLoading={this.state.loading} />
        <LeaderboardFooter />
      </Table>
    )
  }
}

export default LeaderboardContainer
