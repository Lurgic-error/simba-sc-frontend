import AuthService from '../../api/authentication.api';

const user = JSON.parse(localStorage.getItem('user'));

// if there's a user in the localstorage, the initial state will be an
//object with the user and a status object will loggedIn set to true
//else the initial state will contain an empty user and status objects
const initialState = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

const state = initialState;


const getters = {
  getLoggedInUser(state) {
    return state.user
  },
  getUserStatus(state) {
    return state.status
  }
}


const actions = {

  async login({commit}, user_) {
    try {
      let user = await AuthService.login(user_)

      commit('loginSuccess', user)

      return user

    } catch (error) {
      commit('loginFailure', error)
    }
  },

  logout({commit}) {
    AuthService.logout();
    commit('logout');
  },

  async register({commit}, user_) {
    console.log('The Registration Action')
    try {
      let response = await AuthService.register(user_)

      const user = response.data
      console.log('response', response)
      commit('registerSuccess', user);

      return user
    } catch (error) {
      commit('registerFailure', error)
    }
  }
}


const mutations = {

  loginSuccess(state, user) {
    state.status = {
      loggedIn: true
    };
    state.user = user;
  },

  loginFailure(state, error) {
    state.status = {
      error: error
    };
    state.user = null;
  },

  logout(state) {
    state.status = {};
    state.user = null;
  },

  registerSuccess(state, user) {
    state.status = {
      loggedIn:true
    };
    state.user = user
  },

  registerFailure(state, error) {
    state.status = {
      error:error
    };
  }

}





export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}