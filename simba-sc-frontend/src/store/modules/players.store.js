import PlayersAPI from "@/api/players.api";

const initialState = [];

const state = {
    players: initialState
}

const getters = {
    players: state => state.players
}

const actions = {

    async fetchResults({commit}){

        const players = await PlayersAPI.get();

        commit('setResults', players);
    }
}

const mutations = {

    setResults(state, players){
        state.players = players;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}