import React, { PropTypes } from 'react'
import styled from 'styled-components'

const IndicatorSpan = styled.span `
  font-size: .875em;
  position: relative;
  top: -0.1em;
  left: 0.125em;
`

const Indicator = () => (
  <IndicatorSpan>
    &#x25BC;
  </IndicatorSpan>
)

const Button = styled.button `
  font-size: 1em;
  outline-offset: -1px;
`

const SortingButton = (props) => {
  return (
    <Button value={props.value} onClick={props.handleClick}>
      {props.label} {(props.sorting==props.value) && <Indicator />}
    </Button>
  )
}

export default SortingButton

SortingButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  sorting: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
