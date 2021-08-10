<template>
  <div class="login-container">
      <div class="left-login-page">
        <h3>Please Login First</h3>
        <form @submit.prevent="login">
          <input
            v-model="email"
            class="input-form"
            type="email"
            placeholder="your email here"
            required
          />
          <input
            v-model="password"
            class="input-form"
            type="password"
            placeholder="your password here"
            required
          />
          <button type="submit" @click="login">Login</button>
        </form>
      </div>
      <div class="right-login-page">
        <h1>Welcome to Animal Lovers</h1>
        <img src="../assets/login.png" alt="login image" />
      </div>
    </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.token
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>