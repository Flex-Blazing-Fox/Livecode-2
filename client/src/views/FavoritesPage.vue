<template>
  <div>
    <Navbar />
    <div class="favorite">
      <h1>My Favorites Animals</h1>
    </div>
    <div class="favorite-container">
      <div class="card" v-for="favorite in favorites" :key="favorite.id">
        <div class="card-image">
          <img
            :src="favorite.Animal.imageUrl"
            alt="card image"
          />
        </div>
        <div class="card-body">
          <h3>{{ favorite.Animal.name }}</h3>
          <p>{{ favorite.Animal.description }}</p>
        </div>
        <button class="delete-btn" @click="removeFav(favorite.id)">remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  computed: {
    favorites() {
      return this.$store.state.favorites
    }
  },
  methods: {
    removeFav(id) {
      this.$store.dispatch('deleteFavAnimal', id)
    }
  },
  created() {
    this.$store.dispatch('fetchFavorites')
  }
}
</script>

<style>

</style>