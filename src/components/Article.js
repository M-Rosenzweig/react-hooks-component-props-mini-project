import React from "react";

function Article({ SinglePost }) {
  return (
    <article>
      <h3>{SinglePost.title}</h3>
      <small>{(SinglePost.date)}</small>
      <p>{SinglePost.preview}</p>
    </article>
  );
}

export default Article;

//how do I do the default
