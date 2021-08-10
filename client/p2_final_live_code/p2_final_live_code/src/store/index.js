import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const baseURL = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    animals: []
  },
  mutations: {
    SET_ANIMALS(state, payload) {
      state.animals = payload
    }
  },
  actions: {
    login(context,payload){
      const {email,password} = payload
      Axios({
        method: 'POST',
        url: '/login',
        data: {
          email,
          password
        }
      })
      .then(({data})=>{
        localStorage.setItem('access_token', data.token)
        localStorage.setItem('userId', data.id)
        router.push({path:'/'})
      })
      .catch((err)=>{
        next(err)
      })
    },

    logout(){
      localStorage.removeItem('access_token')
      router.push({path:'/login'})
    }
  },
  modules: {
  }
})
