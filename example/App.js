import React from 'react'
import emojione from 'emojione'
import { hot } from 'react-hot-loader'
import Fork from 'react-ghfork'
import DemoEditor from './DemoEditor'
import PlainEditor from './PlainEditor'
import pkg from '../package.json'
import 'react-ghfork/gh-fork-ribbon.ie.css'
import 'react-ghfork/gh-fork-ribbon.css'
import 'draft-js/dist/Draft.css'
import 'draft-js-emoji-plugin/lib/plugin.css'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Fork project='sugarshin/draft-js-pasted-emojione-plugin' className='right' />
      <h1>{pkg.name}</h1>
      <div className='editor-wrapper'>
        <PlainEditor />
        <DemoEditor />
      </div>
      <div className='sample'>
        Try copy n paste this
        {' '}
        <span dangerouslySetInnerHTML={{ __html: emojione.shortnameToImage(':unicorn:') }} />
        {' '}
        to each Editor!
      </div>
    </div>
  )
}

export default hot(module)(App)
