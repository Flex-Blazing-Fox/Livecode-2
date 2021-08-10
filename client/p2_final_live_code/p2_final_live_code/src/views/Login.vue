<template>
  <div>
    <Navbar></Navbar>
    <div class="login-container">
      <div class="left-login-page">
        <form v-on:submit.prevent="login">
          <input
            class="input-form"
            type="email"
            placeholder="your email here"
            v-model="inputLogin.email"
            required
          />
          <input
            class="input-form"
            type="password"
            placeholder="your password here"
            v-model="inputLogin.password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div class="right-login-page">
      </div>
    </div>
</div>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Login',
    data(){
        return {
            dataLogin:{
                email: "",
                password:""
            }
        }
    },
    components:{
       Navbar 
    },
    methods: {
        login(){
            const email = this.dataLogin.email
            const password = this.dataLogin.password
            this.$store.dispatch('login',{email,password})
        }
    }
}
</script>

<style>

</style>