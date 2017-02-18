import React, { PropTypes } from 'react'

const styles = {
  linksWrapper: {
    display: 'flex',
    flex: '0 1 3em',
    marginLeft: 'auto',
    height: '3em'
  },
  link: {
    display: 'block',
    width: '3em',
    height: '3em'
  },
}

const links = {
  fcc: 'https://www.freecodecamp.com/muniftanjim',
  gh: 'https://github.com/MunifTanjim/freeCodeCamp-React-Projects/tree/master/markdown-previewer',
  cp: 'http://codepen.io/MunifTanjim/full/WRLOQV/'
}

const img = {
  fcc: require('../static/images/fcc.png'),
  gh: require('../static/images/gh.png'),
  cp: require('../static/images/cp.png')
}

const Li = (props) => (
  <a style={styles.link} href={props.link} target='_blank'>
    <img
      style={props.style}
      src={props.img} />
  </a>
)

const Links = () => (
  <div style={styles.linksWrapper}>
    <Li img={img.cp}
      link={links.cp}
      style={{margin: '.55em',height: '1.95em'}} />
    <Li img={img.gh}
      link={links.gh}
      style={{margin: '.65em',height: '1.7em'}} />
    <Li img={img.fcc}
      link={links.fcc}
      style={{height: '100%'}} />
  </div>
)

export default Links

Li.propTypes = {
  img: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
