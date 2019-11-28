import ResultsAPI from "@/api/results.api";

const initialState = [];

const state = {
    results: initialState
}

const getters = {
    results: state => state.results
}

const actions = {

    async fetchResults({commit}){

        const results = await ResultsAPI.get();

        commit('setResults', results);
    }
}

const mutations = {

    setResults(state, results){
        state.results = results;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}