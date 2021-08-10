<template>
  <nav>
      <div class="nav-left">
        <img
          src="https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png"
          alt="logo"
        />
        <h1>Animal Lover</h1>
      </div>
      <div class="nav-center">
        <router-link to="/favorites">My Favorites</router-link>
      </div>
      <div class="nav-right">
        <button @click="logout">Logout</button>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>