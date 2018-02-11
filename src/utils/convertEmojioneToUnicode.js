import getDummyElement from './getDummyElement'
import getUnicode from './getUnicode'

const convertEmojioneToUnicode = (html, selector) => {
  const el = getDummyElement()
  el.innerHTML = html
  const emojioneEl = el.querySelectorAll(selector)
  if (emojioneEl.length === 0) {
    return false
  }
  [...emojioneEl].forEach(el => {
    let unicode
    if (unicode = getUnicode(el)) { // eslint-disable-line no-cond-assign
      el.outerHTML = unicode
    }
  })
  return el.innerHTML
}

export default convertEmojioneToUnicode
