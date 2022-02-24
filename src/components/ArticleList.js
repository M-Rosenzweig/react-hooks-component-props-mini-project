import React from "react";
import Article from './Article'

function ArticleList(props) {
  return ( 
    <main>
      <article>
          {props.blogPosts.map ((individual) =>{
              return (
                  <Article
                   key={individual.id}
                   SinglePost= {individual} />
              )
          })}
      </article>
    </main>
  );
}

export default ArticleList;
