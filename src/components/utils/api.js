import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://pete-nc-news-project.herokuapp.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticlesByTopic = (sort_by, order_by, topic) => {
  let path = "/articles";
  if (topic) {
    path += `/?topic=${topic}`;
  }
  return ncNewsApi
    .get(path, {
      params: { sort_by: sort_by, order: order_by },
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticleVote = (article_id, value) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: value })
    .then((res) => {
      return res.data;
    });
};

export const getArticleComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentOnArticle = (article_id, commentToPost) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, commentToPost)
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteCommentFromArticle = (comment_id) => {
  return ncNewsApi.delete(`comments/${comment_id}`).then((res) => {
    return res;
  });
};
