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

  //in return map through topics and put a link to each one /articles/?topic=${topicName}
  return (
    <main className="nav">
      <h2> Topics </h2>
      <div>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/?topic=${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
      </div>
      
    </main>
  );
};

export default TopicSelector;
