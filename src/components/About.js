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
        I'm Sean, a Full-Stack Web Developer and digital content writer looking to further my career in Frontend development, SaaS, and web-based applications.
      </p>
      <p className="content">
        Languages: Git, HTML, .css, JavaScript, React, MERN, MySQL, NoSQL, GraphQL
      </p>
    </div>
  );
}

export default About;
