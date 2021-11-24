import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicSelector from "./components/TopicSelector";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <TopicSelector />
      <Routes>
        <Route path="/" element={<ArticlesByTopic />} />
        <Route path="/articles/" element={<ArticlesByTopic />} />
        <Route path="/articles/:topic" element={<ArticlesByTopic />} />
        <Route path="/articles/:topic/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
