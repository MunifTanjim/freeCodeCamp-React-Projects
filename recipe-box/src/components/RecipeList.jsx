import React from 'react'
import Header from '../components/Header'
import RecipeItemContainer from '../containers/RecipeItemContainer'
import Panel from '../components/Panel'
import Footer from '../components/Footer'
import dataStore from '../utils/dataStore'

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
      <main className='app'>
        <Header />

        <ul className='recipeList'>
          {this.state.dataStore.map((item, index) => (
            <RecipeItemContainer
              key={index}
              handleUpdate={this.updateLocalStorage}
              data={item}
              index={index} />
          ))}
        </ul>

        <Panel handleUpdate={this.updateLocalStorage}  />

        <Footer />
      </main>
    )
  }
})

export default RecipeList
