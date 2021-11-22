import { useEffect, useState } from "react";
import { getTopics } from "./utils/api";
import { Link } from "react-router-dom";

const TopicSelector = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <main className="nav">
      <h2> Topics </h2>
      <div id="topics" className="topics">
          <Link className = "topicNavLink" key="allTopics" to='/articles'>all topics</Link>
      {topics.map((topic) => {
        return (
          <Link className = "topicNavLink" key={topic.slug} to={`/articles/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
      </div>
      
    </main>
  );
};

export default TopicSelector;
