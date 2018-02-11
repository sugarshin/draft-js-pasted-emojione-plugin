import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Fork from 'react-ghfork'
import DemoEditor from './DemoEditor'
import 'react-ghfork/gh-fork-ribbon.ie.css'
import 'react-ghfork/gh-fork-ribbon.css'
import 'draft-js/dist/Draft.css'
import 'draft-js-emoji-plugin/lib/plugin.css'
import pkg from '../package.json'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Fork project='sugarshin/draft-js-pasted-emojione-plugin' className='right' />
      <h1>{pkg.name}</h1>
      <DemoEditor />
      <div className='sample'>
        Try copy n paste this <img className='emojione' alt='🙏' title=':pray:' src='https://cdn.jsdelivr.net/emojione/assets/svg/1f64f.svg' /> to Editor!!
      </div>
    </div>
  )
}

export default hot(module)(App)
