import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3001'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: []
  },
  mutations: {
    SET_ANIMALS(state, payload) {
      state.animals = payload.animals
    },
    SET_FAV_ANIMALS(state, payload) {
      state.favorites = payload.favorites
    }
  },
  actions: {
    fetchAnimals({ commit }) {
      axios({ 
        url: '/animals',
        method: 'GET',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_ANIMALS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchFavorites({ commit }) {
      axios({ 
        url: '/favorites',
        method: 'GET',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          commit('SET_FAV_ANIMALS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addFavoriteAnimal({ dispatch }, animalId) {
      axios({
        url: '/favorites/' + animalId,
        method: 'POST',
        headers: { access_token: localStorage.access_token }
      })
        .then((_) => {
          dispatch('fetchFavorites')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteFavAnimal({ dispatch }) {
      axios({
        url: '/favorites',
        method: 'DELETE',
        headers: { access_token: localStorage.access_token }
      })
        .then(msg => {
          console.log(msg)
          dispatch('fetchFavorites')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
