import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://pete-nc-news-project.herokuapp.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

// export const getArticles = (topic) => {
//   let path = "/articles";
//   if (topic) {
//     path += `/?topic=${topic}`;
//   }
//   return ncNewsApi.get(path).then((response) => {
//     return response.data.articles;
//   });
// };

export const getArticlesByTopic = (topic) => {
  let path = "/articles";
  if (topic) {
    path += `/?topic=${topic}`;
  }
  return ncNewsApi.get(path).then((response) => {
    return response.data.articles;
  });
};





export const getSingleArticle =(article_id)=>{
    return ncNewsApi.get(`/articles/${article_id}`).then((res)=>{
        return res.data.article_id;
    })
}

// export const getArticleComments =(article_id)=>{
//     return ncNewsApi.get(`/articles/${article_id}/comments`).then((res)=>{
//         return res.data.comments
//     })
// }
