import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum odio laboriosam aliquid ad delectus saepe suscipit nostrum est sunt. Eligendi dignissimos quidem, explicabo hic nulla incidunt enim id amet maiores.</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
