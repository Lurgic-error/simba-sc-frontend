import EventsAPI from "@/api/events.api";

const initialState = [];

const state = {
    events: initialState
}

const getters = {
    events: state => state.events
}

const actions = {

    async fetchEvents({commit}){

        const events = await EventsAPI.get();

        commit('setEvents', events);
    }
}

const mutations = {

    setEvents(state, events){
        state.events = events;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}