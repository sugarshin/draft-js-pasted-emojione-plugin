// TODO:

import test from 'ava'
import handlePastedText from '../src/handlePastedText'

[
  [
    'return `not-handled` / `html` argument not be given',
    {},
    ['text', null, {}, {}],
    'not-handled',
  ],
].forEach(([title, config, args, expected]) => {
  test(title, t => {
    t.is(handlePastedText(config)(...args), expected)
  })
})
