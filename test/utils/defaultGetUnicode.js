import test from 'ava'
import defaultGetUnicode from '../../src/utils/defaultGetUnicode'

test('span / return textContent', t => {
  const el = document.createElement('img')
  el.setAttribute('alt', 'Im img')
  t.is(defaultGetUnicode(el), 'Im img')
})
