import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    status: '',
    abonents: [],
    abonent: {},
    isAuth: false
  },
  mutations,
  // mutations: {
  //   SET_ABONENTS: (state, payload) => {
  //     state.abonents = payload
  //   },
  //   AUTH_REQUEST: (state) => {
  //     state.status = 'loading'
  //   },
  //   USER_LOGIN: (state, token) => {
  //     state.status = 'success';
  //     state.token = token;
  //   },
  //   USER_LOGOUT: (state) => {
  //     state.status = '';
  //     state.token = '';
  //   },
  //   SELECT_ABONENT: (state, abonent) => {
  //     state.abonent = abonent
  //   },
  // },
  actions,
  // actions: {
  //   LOGIN({ commit }, payload) {
  //     return new Promise((res, rej) => {
  //       commit('AUTH_REQUEST')
  //       try {
  //         axios.post('http://localhost:5000/api/user/login', payload)
  //           .then(resault => {
  //             let token = resault.data.token;
  //             localStorage.setItem('token', token);
  //             axios.defaults.headers.common['Authorization'] = token;
  //             commit('USER_LOGIN', token)
  //             return true
  //           }).catch(error => {
  //             console.log('in login', error);
  //             return false
  //           })
  //       } catch (error) {
  //         rej(false)
  //       }
  //       res(true)
  //     })
  //   },
  //   LOGOUT({ commit }) {
  //     return new Promise((res, rej) => {
  //       try {
  //         delete axios.defaults.headers.common['Authorization'];
  //         localStorage.removeItem('token');
  //         commit('USER_LOGOUT');
  //         res(true);
  //       } catch (error) {
  //         console.log('Error in logout')
  //         rej(false);
  //       }

  //     })
  //   },
  //   GET_ABONENTS({ commit }, params) {
  //     axios.defaults.headers.common['Authorization'] = this.state.token;
  //     return axios.get("http://localhost:5000/api/data/", { params })
  //       .then((res) => {
  //         commit("SET_ABONENTS", res.data)
  //         return res.data
  //       }).catch((err) => {
  //         console.log("Error GET_ABONENTS", err)
  //         return [];
  //       })
  //   },
  //   GET_ABONENT({ commit }, params) {
  //     axios.defaults.headers.common['Authorization'] = this.state.token;
  //     return axios.get("http://localhost:5000/api/data/", { params })
  //       .then((res) => {
  //         if (params.hasOwnProperty('id')) {
  //           commit("SELECT_ABONENT", res.data)
  //           return res.data
  //         }
  //       }).catch((err) => {
  //         console.log("Error GET_ABONENT", err)
  //         return {};
  //       })
  //   },
  //   ADD({ commit }, data) {
  //     return axios.post("http://localhost:5000/api/data/", data)
  //       .then((res) => {
  //         dispatch('GET_ABONENTS').then(res => console.log("Update", res))
  //       }).catch((err) => {
  //         console.log("Error GET_ABONENT", err)
  //         return {};
  //       })
  //   },
  //   UPDATE({ commit }, data) {
  //     return axios.put("http://localhost:5000/api/data/", data)
  //       .then((res) => {
  //         dispatch('GET_ABONENTS').then(res => console.log("Update", res))
  //       }).catch((err) => {
  //         console.log("Error GET_ABONENT", err)
  //         return {};
  //       })
  //   },
  //   DELETE({ commit }, data) {
  //     return axios.delete("http://localhost:5000/api/data/", { data })
  //       .then((res) => {
  //         dispatch('GET_ABONENTS').then(res => console.log("Delete", res))
  //       }).catch((err) => {
  //         return {};
  //       })
  //   }
  // },
  getters
  // getters: {
  //   ABONENTS(state) {
  //     return state.abonents
  //   },
  //   ABONENT(state) {
  //     return state.abonent
  //   },
  //   GROUPS(state) {
  //     let set = new Set(state.abonents.map(i => i.group))
  //     return Array.from(set)
  //   },
  //   IS_LOGGED: state => !!state.token
  // }
}, )