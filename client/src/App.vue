<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <Login v-if="!isLogin"></Login>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: { Navbar, Login },
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

<style>
</style>
