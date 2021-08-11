import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: [],
    isLogin: false
  },
  mutations: {
    SET_ANIMALS (state, payload) {
      state.animals = payload
    },
    SET_FAVORITES (state, payload) {
      state.favorites = payload
    },
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_LOGOUT (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'post',
        url: '/login',
        data: { email, password }
      })
        .then(({ data }) => {
          localStorage.token = data.token
          context.commit('SET_LOGIN', true)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout (context, payload) {
      localStorage.removeItem('token')
      context.commit('SET_LOGOUT', false)
    },
    fetchAnimals ({ commit }) {
      axios({
        method: 'GET',
        url: '/animals',
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyODYwNTQ4OH0.P8Sn7pc5bVZcMOiw1O4y5KYHEkd64PZtt-ike0xxkjI' // localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_ANIMALS', data.animals)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchFavorites ({ commit }) {
      axios({
        method: 'GET',
        url: '/favorites',
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyODYwNTQ4OH0.P8Sn7pc5bVZcMOiw1O4y5KYHEkd64PZtt-ike0xxkjI' // localStorage.token
        }
      })
        .then(({ data }) => {
          commit('SET_FAVORITES', data.favorites)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addFavorite (context, payload) {
      const { userId, animalId } = payload
      axios({
        method: 'POST',
        url: '/favorites',
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyODYwNTQ4OH0.P8Sn7pc5bVZcMOiw1O4y5KYHEkd64PZtt-ike0xxkjI' // localStorage.token
        },
        data: { userId, animalId }
      })
        .then((_) => {
          context.dispatch('fetchFavorites')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteFavorite (context, payload) {
      const { id } = payload
      axios({
        method: 'POST',
        url: `/favorites/${id}`,
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyODYwNTQ4OH0.P8Sn7pc5bVZcMOiw1O4y5KYHEkd64PZtt-ike0xxkjI' // localStorage.token
        }
      })
        .then((_) => {
          context.dispatch('fetchFavorites')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
