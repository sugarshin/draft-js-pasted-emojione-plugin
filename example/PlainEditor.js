import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'

export default class PlainEditor extends Component {
  state = { editorState: EditorState.createEmpty() }

  onChange = editorState => this.setState({ editorState })

  focus = () => this.editor.focus()

  handleKeyCommand = command => {
    const newEditorState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newEditorState) {
      this.onChange(newEditorState)
      return 'handled'
    }
    return 'not-handled'
  }

  render() {
    return (
      <div className='editor'>
        <h2>Default</h2>
        <div onClick={this.focus} className='plain-editor'>
          <Editor
            ref={c => this.editor = c}
            placeholder='Contents in here...'
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
          />
        </div>
      </div>
    )
  }
}
