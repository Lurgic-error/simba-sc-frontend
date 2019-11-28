
import NewsAPI from "@/api/news.api";

const initialState = [];

const state = {
    news: initialState
}

const getters = {

    allNews:state => state.news
}

const actions = {
    async fetchNews({
        commit
    }) {
        const news = await NewsAPI.get();

        news.forEach(n =>{
            const imageURL = `https://res.cloudinary.com/hr8snhbiy/${n.image}`;
            n.image =  imageURL;
        });
        
        console.log(news)
        commit('setNews', news);
    }
}

const mutations = {
    setNews:(state, data) => (state.news = data)
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}