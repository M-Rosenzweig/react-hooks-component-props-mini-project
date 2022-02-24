import React from "react";

function About(props) {
  return (
    <aside>
      <img src={props.url} alt={props.alt}></img>
      <p> {props.text}</p>
      <br></br>
      <p> {props.hash}</p>
    </aside>
  );
}

export default About;
