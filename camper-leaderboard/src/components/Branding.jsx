import React from 'react'
import styled from 'styled-components'

const BrandingWrapper = styled.div `
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding: .75em;
`

const Logo = styled.img `
  height: 2em;
`

const Branding = () => (
  <BrandingWrapper>
    <Logo
      src='https://www.freecodecamp.com/design-style-guide/downloads/freeCodeCamp-alternative.png'
      alt='freeCodeCamp Logo' />
  </BrandingWrapper>
)

export default Branding
