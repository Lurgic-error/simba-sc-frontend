import SubscriberAPI from "@/api/subscriber.api";


const initialState = () => ({
    subscriber: {},
    subscriberStatus: {
        loggedIn: false,
        error: ''
    }
});

const state = initialState();

const getters = {
    subscriber: state => state.subscriber,

    loggedIn: state => state.subscriberStatus.loggedIn,

    error: state => state.subscriberStatus.error,
}

const actions = {

    async loginSubscriber({
        commit
    }, user) {
        const {
            subscriber,
            error
        } = await SubscriberAPI.login(user)

        if (!error) {
            commit('subscriberLoggedIn', subscriber)
        } else {
            commit('subscriberLoginFailed', error);
            commit('subscriberLoggedOut');
        }
    },

    async registerSubscriber({
        commit
    }, user) {
        console.log('registering subscriber')

        const {
            subscriber,
            error
        } = await SubscriberAPI.register(user)

        if (!error) {
            commit('subscriberRegistrationSuccess', subscriber);
            commit('subscriberRegistered', subscriber);
        } else {
            commit('subscriberRegistrationFailed', error)
        }
    },

    async updateSubscriber({
        commit
    }, user, id) {
        const {
            subscriber,
            error
        } = SubscriberAPI.update(user, id)

        if (!error) {
            commit('subscriberUpdated', subscriber)
        } else {
            commit('subscriberUpdateFailed', error)
        }
    },
    reset({
        commit
    }) {
        commit('resetSubscriber');
    },
}

const mutations = {

    subscriberLoggedIn(state, subscriber) {
        state.subscriber = subscriber;
    },

    subscriberLoggedOut(state) {
        state.subscriber = null;
    },

    subscriberLoginSuccess(state) {
        state.subscriberStatus.loggedIn = true
    },

    subscriberLoginFailed(state, error) {
        state.subscriberStatus.error = error;
    },
    subscriberRegistered(state, subscriber){
        state.subscriber = subscriber;
    },

    subscriberRegistrationSuccess(state) {
        state.subscriberStatus.loggedIn = true;
    },
    subscriberRegistrationFailed(state, error) {
        state.subscriberStatus.loggedIn = false;
        state.subscriberStatus.error = error;
    },

    subscriberUpdated(state, subscriber) {
        state.subscriber = subscriber;
    },
    subscriberUpdateFailed(state, error) {
        state.subscriberStatus.error = error;
    },

    reset(state) {
        const newState = initialState();

        Object.keys(newState).forEach(key => {
            state[key] = newState[key]
        });
    }
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}