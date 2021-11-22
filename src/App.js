import { Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicSelector from "./components/TopicSelector";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
 
      <div className="App">
        <Header />
        <TopicSelector />
        <ArticlesList />
      </div>

  );
}

export default App;
