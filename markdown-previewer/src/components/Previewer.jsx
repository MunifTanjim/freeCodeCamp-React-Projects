import React, { PropTypes } from 'react'

const Previewer = (props) => (
  <div className='previewer'>
    <h3>Preview</h3>
    <div
      className='previewer-content'
      dangerouslySetInnerHTML={props.parsedMarkdown} />
  </div>
)

export default Previewer

Previewer.propTypes = {
  parsedMarkdown: PropTypes.object.isRequired,
}
