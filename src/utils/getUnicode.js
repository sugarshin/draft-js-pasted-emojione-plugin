// @see https://github.com/emojione/emojione/blob/ca555ab7575ad3016ae0e2b45f330da9fd0027c8/lib/js/emojione.js#L240-L362
const getUnicode = el => {
  switch (el.tagName.toLowerCase()) {
  case 'span':
  case 'object':
    return el.textContent
  case 'img': return el.getAttribute('alt')
  case 'svg': return el.querySelector('description').textContent
  default: return null
  }
}

export default getUnicode
