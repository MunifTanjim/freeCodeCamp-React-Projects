import React from 'react'
import Header from '../components/Header'
import RecipeItemContainer from '../containers/RecipeItemContainer'
import Panel from '../components/Panel'
import dataStore from '../utils/dataStore'

const styles = {
  Main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  },
  RecipeList: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width: '100%',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

const RecipeList = React.createClass({
  getInitialState: function() {
    return {
      dataStore: dataStore
    }
  },
  updateLocalStorage: function() {
    localStorage.setItem('_mt_recipebox', JSON.stringify(dataStore))
    this.setState({
      dataStore: dataStore
    })
  },
  render: function() {
    return (
      <main style={styles.Main}>
        <Header />
        <ul style={styles.RecipeList}>
          {this.state.dataStore.map((item, index) => (
            <RecipeItemContainer
              key={index}
              handleUpdate={this.updateLocalStorage}
              data={item}
              index={index} />
          ))}
        </ul>
        <Panel handleUpdate={this.updateLocalStorage}  />
      </main>
    )
  }
})

export default RecipeList
