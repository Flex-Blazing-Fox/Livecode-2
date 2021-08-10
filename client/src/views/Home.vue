<template>
  <div class="home-container" v-if="isLogin">
    <div v-for="animal in animals" :key="animal.id">
      <Card :animal="animal"></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: { Card },
  computed: {
    animals() {
      return this.$store.state.animals;
    },
    isLogin() {
      if (this.$store.state.access_token) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.$store.dispatch("getAnimals");
  },
};
</script>
