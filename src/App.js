import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicSelector from "./components/TopicSelector";
import ArticlesList from "./components/ArticlesList";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  return (
    <div className="App">
      <Header />
      <TopicSelector />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/" element={<ArticlesList />} />
        <Route path="/articles/:topic" element={<ArticlesByTopic />} />
      </Routes>
    </div>
  );
}

export default App;
