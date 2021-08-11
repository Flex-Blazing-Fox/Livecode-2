import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    favourites: [],
    isLogin: false
  },
  mutations: {
    SET_ANIMALS (state, payload) {
      state.animals = payload
    },
    SET_FAVOURTIES (state, payload) {
      state.favourites = payload
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
          localStorage.setItem('access_token', data.access_token)
          this.state.isLogin = true
          router.push('/')
        })
        .catch(err => {
          console.log(err.data[0].response.message)
        })
    },
    fetchAnimal ({ commit }) {
      axios({
        method: 'GET',
        url: '/animals',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('SET_ANIMALS', data.animals)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchFavourites ({ commit }) {
      axios({
        method: 'GET',
        url: '/favourites',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('SET_FAVOURTIES', data.favorites)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToFavourite (context, payload) {
      axios({
        method: 'POST',
        url: `/favourites/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          router.push('/favourites')
        })
        .catch(err => {
          console.log(err.data[0].response.message)
        })
    },
    deleteFavourite ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `/favourites/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          dispatch('fetchFavourites')
        })
        .catch(err => {
          console.log(err.data[0].response.message)
        })
    },
    logout (context) {
      localStorage.clear()
      router.push('/login')
    }
  },
  modules: {
  }
})
