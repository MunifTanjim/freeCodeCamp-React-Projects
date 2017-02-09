import React from 'react'

const styles = {
  IngredientList: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: '1em',
    width: '80%'
  }
}

const IngredientList = React.createClass({
  render: function() {
    return (
      <ul style={styles.IngredientList}>
        {this.props.data.map((item, index) => (
          <li key={index} className="ingredient">
            {item}
          </li>
        ))}
      </ul>
    )
  }
})

export default IngredientList
