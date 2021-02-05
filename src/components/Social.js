import React, { Component } from 'react'

class Social extends Component {
  render () {
    return (
      <div class='social'>
        <a
          href='https://github.com/saiffer'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fab fa-github'>Projects</i>
        </a>
        <a
          href='https://www.linkedin.com/in/david-aznaurov-19527b139/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fab fa-linkedin-in'>Resume</i>
        </a>
      <a
          href='https://davidwebdev.home.blog/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fas fa-blog'>Blog</i>
        </a>
      </div>
    )
  }
}

export default Social
