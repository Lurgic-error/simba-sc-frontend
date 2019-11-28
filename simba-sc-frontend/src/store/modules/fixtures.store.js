import FixturesAPI from "@/api/fixtures.api";

const initialState = [];

const state = {
    fixtures: initialState
}

const getters = {
    fixtures: state => state.fixtures
}

const actions = {

    async fetchFixtures({commit}){

        const fixtures = await FixturesAPI.get();

        commit('setFixtures', fixtures);
    }
}

const mutations = {

    setFixtures(state, fixtures){
        state.fixtures = fixtures;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}