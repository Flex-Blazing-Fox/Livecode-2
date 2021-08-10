import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: []
  },
  mutations: {
    SET_ANIMALS (state, payload) {
      state.animals = payload
    }
  },
  actions: {
    fetchAnimals ({ commit }) {
      axios({
        method: 'GET',
        url: '/animals',
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyODYwMDY1M30.OhqKw8waU_nUL0L9mJQ4tnetRUCBk1L3dy_X44eEFP0' // localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_ANIMALS', data.animals)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
