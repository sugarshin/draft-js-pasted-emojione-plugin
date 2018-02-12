// TODO:

import test from 'ava'
import index from '../src/index'

test('create plugin', t => {
  t.deepEqual(Object.keys(index()), ['handlePastedText'])
})
