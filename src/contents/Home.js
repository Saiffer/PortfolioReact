import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/me.jpg'
import Social from '../components/Social'

class Home extends Component {
  render () {
    return (
      <div className='condiv home'>
        <ReactTypingEffect
          className='typingeffect'
          text={['I am David Aznaurov', 'I am a JavaScript Developer']}
          speed={100}
          eraseDelay={700}
        />
        <img src={profilepic} className='profilepic' alt='myPhoto'></img>
        <Social />
      </div>
    )
  }
}

export default Home
