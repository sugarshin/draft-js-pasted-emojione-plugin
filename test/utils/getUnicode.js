import test from 'ava'
import getUnicode from '../../src/utils/getUnicode'

test('span / return textContent', t => {
  const el = document.createElement('span')
  el.innerHTML = 'Im span'
  t.is(getUnicode(el), 'Im span')
})

test('object / return textContent', t => {
  const el = document.createElement('object')
  el.innerHTML = 'Im object'
  t.is(getUnicode(el), 'Im object')
})
