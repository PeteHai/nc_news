import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://pete-nc-news-project.herokuapp.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((res) => {
    return res.data.genres;
  });
};

export const getArticles = (topic) => {
  return ncNewsApi.get('/articles').then((response)=>{
    console.log("in getArticles")
    console.log(response.data.articles)
    return response.data.articles
  })
};

// export const getSingleArticle =(article_id)=>{
//     return ncNewsApi.get(`/articles/${article_id}`).then((res)=>{
//         console.log(res.data)
//         return res.data.article_id;
//     })
// }

// export const getArticleComments =(article_id)=>{
//     return ncNewsApi.get(`/articles/${article_id}/comments`).then((res)=>{
//         return res.data.comments
//     })
// }
