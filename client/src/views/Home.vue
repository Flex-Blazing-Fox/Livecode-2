<template>
  <div>
    <Navbar />
    <div class="home-container">
      <div class="card" v-for="animal in animals" :key="animal.id">
        <div class="card-image">
          <img
            :src="animal.imageUrl"
            alt="card image"
          />
        </div>
        <div class="card-body">
          <h3>{{ animal.name }}</h3>
          <p>{{ animal.description }}</p>
        </div>
        <button @click="addFav(animal.id)">Add To Favorites</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  methods: {
    addFav(animalId) {
      this.$store.dispatch('addFavoriteAnimal', animalId)
    }
  },
  created() {
    this.$store.dispatch('fetchAnimals')
  }
}
</script>
