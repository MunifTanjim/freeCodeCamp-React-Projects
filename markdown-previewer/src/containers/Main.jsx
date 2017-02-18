import React, { Component } from 'react'
import marked from 'marked'
import Editor from '../components/Editor'
import Previewer from '../components/Previewer'
import defaultMarkdown from '../utils/defaultMarkdown'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: defaultMarkdown
    }
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.parseMarkdown = this.parseMarkdown.bind(this)
  }

  handleMarkdownChange(e) {
    e.preventDefault()
    this.setState({
      markdown: e.target.value
    })
  }

  parseMarkdown() {
    marked.setOptions({
      sanitize: true
    })

    return {
      __html: marked(this.state.markdown)
    }
  }

  render() {
    return (
      <div className='app-body'>
        <Editor
          markdown={this.state.markdown}
          handleMarkdownChange={this.handleMarkdownChange} />
        <Previewer
          parsedMarkdown={this.parseMarkdown()} />
      </div>
    )
  }
}

export default Main
