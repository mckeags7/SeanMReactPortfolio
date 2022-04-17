// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Digital Content Writer and Full-Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Sean T. Mckeag"/>
      <p className="content is-italic mt-4">
        I'm Sean, a digital content writer and VO actor studying full stack web development to further my career in SaaS and web-based applications.
      </p>
      <p className="content">
        Given my background in teaching, I'm a huge advocate for learning resources, which guide
        users to what they need in the moment, but also enable them to explore
        content on their terms using video, audio, and documentation in an advanced learning environment.
      </p>
    </div>
  );
}

export default About;
