import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";

const blogInfo = {
  name: "My Blog",
  about: "This is my blog about coding.",
  image: "https://via.placeholder.com/150"
};

const articles = [
  { id: 1, title: "Post 1", date: "2025-11-05", preview: "Preview 1..." },
  { id: 2, title: "Post 2", date: "2025-11-04", preview: "Preview 2..." }
];

function App() {
  return (
    <div>
      <Header name={blogInfo.name} />
      <About image={blogInfo.image} about={blogInfo.about} />
      <ArticleList posts={articles} />
    </div>
  );
}

export default App;