import React, { Component } from "react";

import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/me.jpg";
import Social from "../components/Social";
import ProjectCard from "../components/ProjectCard";

const one = "\\static\\media\\one.e7837086.JPG";
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
        <ProjectCard media={one} />
        <ProjectCard media={two} />
      </div>
    );
  }
}

export default Home;
