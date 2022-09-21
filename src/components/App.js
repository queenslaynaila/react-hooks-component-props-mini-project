import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
       <Header name={blogData.name}> </Header>
       <About URL={blogData.image} About={blogData.about} ></About>
       <ArticleList posts={blogData.posts} ></ArticleList>
       
    </div>
  );
}

export default App;
