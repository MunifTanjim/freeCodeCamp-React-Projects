import React from 'react'

const footerLinks = {
  MunifTanjim: 'https://muniftanjim.com',
  freeCodeCamp: 'https://www.freecodecamp.com/muniftanjim',
  GitHub: 'https://github.com/MunifTanjim/freeCodeCamp-React-Projects/tree/master/recipe-box',
  CodePen: 'https://codepen.io/MunifTanjim/full/bgvZzJ/'
}

const Footer = () => (
  <footer className='footer'>
    {Object.keys(footerLinks).map((key,i) => (
      <a
        key={i}
        className='button'
        href={footerLinks[key]}
        target='_blank'>
        {key}
      </a>
    ))}
  </footer>
)

export default Footer
