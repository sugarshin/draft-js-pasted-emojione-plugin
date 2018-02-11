# draft-js-pasted-emojione-plugin

[![CircleCI][circleci-image]][circleci-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[EmojiOne](https://www.emojione.com/) plugin for [draft-js-plugins](https://github.com/draft-js-plugins/draft-js-plugins).

```sh
yarn add draft-js-pasted-emojione-plugin

# or

npm install draft-js-pasted-emojione-plugin
```

## Usage

```js
import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createPastedEmojionePlugin from 'draft-js-pasted-emojione-plugin'

const pastedEmojionePlugin = createPastedEmojionePlugin()
const plugins = [pastedEmojionePlugin]

export default class DemoEditor extends Component {
  state = { editorState: EditorState.createEmpty() }

  onChange = editorState => this.setState({ editorState })

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        plugins={plugins}
        onChange={this.onChange}
      />
    )
  }
}
```

## Motivation

draft-js will convert `<img />` to the emoji of camera (📷) when you copy n paste.
So EmojiOne's emoji image will be converted as well. This is not an assumed behavior.

ref: https://github.com/facebook/draft-js/pull/1378

## Option

### `config`

`createPastedEmojionePlugin(config)`

| Property | Type | Default |
|:---|:---|:---|
| `config.selector` | string | '.emojione' |

## license

[MIT](https://sugarshin.mit-license.org/)

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/draft-js-pasted-emojione-plugin/tree/master.svg?style=svg&circle-token=
[circleci-url]: https://circleci.com/gh/sugarshin/draft-js-pasted-emojione-plugin/tree/master
[coveralls-image]: https://coveralls.io/repos/github/sugarshin/draft-js-pasted-emojione-plugin/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/sugarshin/draft-js-pasted-emojione-plugin?branch=master
[npm-image]: https://img.shields.io/npm/v/draft-js-pasted-emojione-plugin.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/draft-js-pasted-emojione-plugin
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
