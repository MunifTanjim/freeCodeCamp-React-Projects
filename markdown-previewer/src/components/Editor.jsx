import React, { PropTypes } from 'react'

const Editor = (props) => (
  <div className='editor'>
    <h3>Editor</h3>
    <textarea
      className='editor-content'
      value={props.markdown}
      onChange={props.handleMarkdownChange} />
  </div>
)

export default Editor

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleMarkdownChange: PropTypes.func.isRequired,
}
