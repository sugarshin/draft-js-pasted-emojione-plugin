import handlePastedText from './handlePastedText'

const createPastedEmojionePlugin = (config = {}) => {
  const { selector = '.emojione' } = config
  return {
    handlePastedText: handlePastedText(selector),
  }
}

export default createPastedEmojionePlugin
