import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: []
  },
  mutations: {
    SET_ANIMALS (state, payload) {
      state.animals = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.data[0].response)
        })
    },
    fetchAnimal ({ commit }) {
      axios({
        method: 'GET',
        url: '/animals'
      })
        .then(({ data }) => {
          console.log(data.animals)
          commit('SET_ANIMALS', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
