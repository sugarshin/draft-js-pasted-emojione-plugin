import React, { Component } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createEmojiPlugin from 'draft-js-emoji-plugin'
import createPastedEmojionePlugin from 'draft-js-pasted-emojione-plugin'

const emojiPlugin = createEmojiPlugin()
const pastedEmojionePlugin = createPastedEmojionePlugin()
const plugins = [emojiPlugin, pastedEmojionePlugin]

export default class DemoEditor extends Component {
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
      <div onClick={this.focus} className='demo-editor'>
        <Editor
          ref={c => this.editor = c}
          placeholder='Contents in here...'
          editorState={this.state.editorState}
          plugins={plugins}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
        <emojiPlugin.EmojiSuggestions />
      </div>
    )
  }
}
