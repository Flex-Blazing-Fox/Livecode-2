<template>
  <div>
    <div class="favorite">
      <h1>My Favorites Animals</h1>
    </div>
    <div class="favorite-container">
      <FavouriteCard v-for="favourite in favourites" :key="favourite.id" :favourite="favourite" />
    </div>
  </div>
</template>

<script>
import FavouriteCard from '../components/FavouriteCard.vue'

export default {
  name: 'Favourites',
  components: { FavouriteCard },
  computed: {
    favourites () {
      return this.$store.state.favourites
    }
  },
  created () {
    this.$store.dispatch('fetchFavourites')
  }
}
</script>

<style>

</style>
