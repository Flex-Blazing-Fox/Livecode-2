<template>
  <div>
    <nav>
      <div class="nav-left">
        <img
          src="https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png"
          alt="logo"
        />
        <h1 @click.prevent="toHome">Animal Lover</h1>
      </div>
      <div class="nav-center">
        <a @click="toFavorites">My Favorites</a>
      </div>
      <div class="nav-right">
        <button @click.prevent="logout" v-if="isLogin">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    toFavorites() {
      if (this.$store.state.access_token) {
        this.$router.push({ path: "/favorites" });
      } else {
        this.$router.push({ path: "/home" });
      }
    },
    toHome() {
      this.$router.push({ path: "/home" });
    },
  },
  computed: {
    isLogin() {
      if (this.$store.state.access_token) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>