import React, { Component } from "react";

import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/me.jpg";
import Social from "../components/Social";
import ProjectCard from "../components/ProjectCard";

const one = "\\one.JPG";
const two = "\\two.JPG";
class Home extends Component {
  render() {
    return (
      <div className='condiv home'>
        <ReactTypingEffect
          className='typingeffect'
          text={["I am David Aznaurov", "I am a JavaScript Developer"]}
          speed={100}
          eraseDelay={700}
        />
        <img src={profilepic} className='profilepic' alt='myPhoto'></img>
        <Social />
        <ProjectCard
          media={one}
          projectName='Netflix Clone'
          projectLink='https://netflix-clone-david.netlify.app/'
        />
        <ProjectCard
          media={two}
          projectName='Book Application'
          projectLink='https://book-app-david.netlify.app/'
        />
      </div>
    );
  }
}

export default Home;
