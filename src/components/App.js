import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

// move header to other file and import / export
// make article list work / review
// Make Article happen

function App() {
  return (
    <div className="App">
      <Header title={blogData.name} />
      <About
        url="https://via.placeholder.com/215 (Links to an external site.)"
        alt="blog logo"
        text={blogData.about}
        hash="   - #RosenVibe"
      />
      <ArticleList blogPosts={blogData.posts} />
    </div>
  );
}

export default App;

//console.log(mappedGoods);
// console.log(blogData);
// console.log(blogPost);
// You got this. <br></br> You are a humble Super Beast!
