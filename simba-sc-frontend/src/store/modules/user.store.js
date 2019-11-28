import UserAPI from "@/api/users.api";

const state = {
    users: []
}

const getters = {
    getUsers(state) {
        return state.users;
    }
}

const actions = {
    async fetchUsers({ commit }) {
        try {
            const response = await UserAPI.getAll();
            commit('SET_USERS', response.data);
        } catch (error) {
            // handle the error here
        }    
    }
}

const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    }
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}