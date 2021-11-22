import axios from 'axios';
import { PATH_RELATIVE } from 'relateurl';

const ncNewsApi = axios.create({
    base URL: 'https://pete-nc-news-project.herokuapp.com/api/'
})

export const getTopics =()=>{
    return ncNewsApi.get('/topics').then((res)=>{
        return res.data.genres;
    })
}



export const getArticles =(topic)=>{
    let path = '/articles';
    if(topic){
        path +=`/?topic=${topic}`
    }

    return ncNewsApi.get(path).then((res)=>{
        return res.data.articles;
    })
}


export const getSingleArticle =(article_id)=>{
    return ncNewsApi.get(`/articles/${article_id}`).then((res)=>{
        console.log(res.data)
        return res.data.article_id;
    })
}

export const getArticleComments =(article_id)=>{
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((res)=>{
        return res.data.comments
    })
}
