<template>
  <div class="login-container">
    <div class="left-login-page">
      <h3>Please Login First</h3>
      <form>
        <input
          class="input-form"
          type="email"
          placeholder="your email here"
          required
          v-model="user.email"
        />
        <input
          class="input-form"
          type="password"
          placeholder="your password here"
          required
          v-model="user.password"
        />
        <button type="submit" @click.prevent="submitLogin">Login</button>
      </form>
    </div>
    <div class="right-login-page">
      <h1>Welcome to Animal Lovers</h1>
      <img src="../assets/login.png" alt="login image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      this.$store
        .dispatch("submitLogin", this.user)
        .then(({ data }) => {
          this.$store.commit("SET_ACCESS_TOKEN", data.access_token);
          this.$router.push({path: "/home"})
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>