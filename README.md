# draft-js-pasted-emojione-plugin

[![CircleCI][circleci-image]][circleci-url]
[![Codecov][codecov-image]][codecov-url]

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

[Demo](https://sugarshin.github.io/draft-js-pasted-emojione-plugin/)

ref: https://github.com/facebook/draft-js/pull/1378

## Option

### `config`

`createPastedEmojionePlugin(config)`

| Property | Type | Default |
|:---|:---|:---|
| `config.selector` | string | `'.emojione'` |

## license

[MIT](https://sugarshin.mit-license.org/)

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/draft-js-pasted-emojione-plugin/tree/master.svg?style=svg&circle-token=2cbb475f9880e574e1c8b6026b8cc90d3c550fc0
[circleci-url]: https://circleci.com/gh/sugarshin/draft-js-pasted-emojione-plugin/tree/master
[codecov-image]: https://codecov.io/gh/sugarshin/draft-js-pasted-emojione-plugin/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sugarshin/draft-js-pasted-emojione-plugin
[npm-image]: https://img.shields.io/npm/v/draft-js-pasted-emojione-plugin.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/draft-js-pasted-emojione-plugin
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
