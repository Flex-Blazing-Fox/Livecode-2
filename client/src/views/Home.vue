<template>
  <div class="home-container">
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
      console.log("aaaa");
      console.log(this.$store.state.animals);
      return this.$store.state.animals;
    },
  },
  created() {
    this.$store.dispatch("getAnimals");
  },
};
</script>
