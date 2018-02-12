import handlePastedText from './handlePastedText'
import defaultGetUnicode from './utils/defaultGetUnicode'

const createPastedEmojionePlugin = ({ selector = 'img.emojione', getUnicode = defaultGetUnicode } = {}) => {
  return {
    handlePastedText: handlePastedText({ selector, getUnicode }),
  }
}

export default createPastedEmojionePlugin
