import React from 'react'
import Links from '../components/Links'

const styles = {
  header: {
    background: '#006400',
    color: '#fff',
    height: '3em',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    flexShrink: 0
  },
  title: {
    margin: 0,
    marginLeft: '.25em',
    fontSize: '1.6em'
  }
}

const Navbar = () => (
  <header style={styles.header}>
    <h1 style={styles.title}>Markdown Previewer</h1>
    <Links />
  </header>
)

export default Navbar
