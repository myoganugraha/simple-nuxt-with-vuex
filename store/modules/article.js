import Vuex from 'vuex'
import getAllNews from '@/services/allNews'

const state = {
    newsArticle: [],
    isLoading: false
};

const mutations = {
    getArticle (state) {
        state.isLoading = !state.isLoading
        getAllNews.getAllNews()
        .then(res => {
            state.newsArticle.clear
            state.newsArticle = res.data.articles
            console.log(res.data.articles)
            console.log(state.newsArticle.length)
            state.isLoading = !state.isLoading
        })
        .catch(err => {
            console.log(err)
            state.isLoading = !state.isLoading
        });
    }
}

export default {
    state,
    mutations
}