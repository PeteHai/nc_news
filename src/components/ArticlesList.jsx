// import React from "react";
// import { useEffect, useState } from "react";
// import { getArticles } from "./utils/api";

// const ArticlesList = () => {
//   const [newsArticles, setNewsArticles] = useState([]);

  
//   useEffect(() => {
//     getArticles().then((articles) => {
//       setNewsArticles(articles);
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }, []);

//   return (
//     <main className="articleList">
//       <h2> Articles </h2>
//       <div>
//         {newsArticles.map((article)=>{
//           return( //return item cards here???
//             <li className ="singleArticleOnHome" key={article.article_id}>
//               <h3>title: {article.title}</h3>
//               <p>topic: {article.topic} </p>
//               <p>author: {article.author} </p>
//               <p>created_at: {article.created_at} </p>
//               <p>votes: {article.votes} </p>
//               <p>comments: {article.comment_count} </p>
//             </li>
//           )
//         })}
//       </div>
//     </main>
//   );
// };

// export default ArticlesList;
