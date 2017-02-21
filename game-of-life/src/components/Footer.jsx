import React, { PropTypes } from 'react'

const links = {
  cp: 'http://codepen.io/MunifTanjim/full/RpwEJG/',
  gh: 'https://github.com/MunifTanjim/freeCodeCamp-React-Projects/tree/master/game-of-life',
  fcc: 'https://www.freecodecamp.com/muniftanjim',
}

const img = {
  cp: require('../static/images/cp.png'),
  gh: require('../static/images/gh.png'),
  fcc: require('../static/images/fcc.png'),
}

const Pill = (props) => (
  <a className='pill' href={props.link} target='_blank'>
    <img src={props.img} />
  </a>
)

const Footer = () => (
  <footer className='footer'>
    <div className='left'>
      <span>{'</>'} by <a href='https://muniftanjim.com'>MunifTanjim</a></span>
    </div>
    <div className='center'>
      <Pill img={img.cp}
        link={links.cp} />
      <Pill img={img.gh}
        link={links.gh} />
      <Pill img={img.fcc}
        link={links.fcc} />
    </div>
    <div className='right'>
      <span>
        <a href="https://www.wikiwand.com/en/Conway's_Game_of_Life" target='_blank'>
          Conway's Game of Life
        </a>
      </span>
    </div>
  </footer>
)

export default Footer

Pill.propTypes = {
  img: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
}
