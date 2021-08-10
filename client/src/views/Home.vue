<template>
  <div class="home-container">
    <AnimalCard v-for="animal in animals" :key="animal.id" />
  </div>
</template>

<script>
import AnimalCard from '../components/AnimalCard.vue'

export default {
  name: 'Home',
  components: { AnimalCard },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  created () {
    this.$store.dispatch('fetchAnimal')
  }
}
</script>
