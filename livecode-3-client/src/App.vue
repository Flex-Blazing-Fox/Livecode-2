<template>
  <div id="app">
    <div id="nav">
      <!--Navbar-->
    <nav>
      <div class="nav-left">
        <img
          src="https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png"
          alt="logo"
        />
        <router-link to="/"><h1>Animal Lover</h1></router-link>
      </div>
      <div class="nav-center">
        <router-link to="/favorites">My Favorites</router-link>
      </div>
      <div class="nav-right">
        <button>Logout</button>
      </div>
    </nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Animals',
  methods: {

  }
}
</script>
<style>

</style>
