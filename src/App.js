import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicSelector from "./components/TopicSelector";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import { useState } from "react";
import { UserContext } from "./context/UserContext.js";

function App() {
  //hard coded in as jessjelly
  const [currentUser, setCurrentUser] = useState("");

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <User />
        <TopicSelector />
        <Routes>
          <Route path="/" element={<ArticlesByTopic />} />
          <Route path="/articles/" element={<ArticlesByTopic />} />
          <Route path="/articles/:topic" element={<ArticlesByTopic />} />
          <Route
            path="/articles/:topic/:article_id"
            element={<SingleArticle />}
          />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
