<template>
    <div>
        <!--Favorites-->
        <div class="favorite">
        <h1>My Favorites Animals</h1>
        </div>
        <div class="favorite-container">
            <Favorite v-for="favorite in favorites" :key="favorite.id" :favorite="favorite"/>
        </div>
    </div>
</template>

<script>
import Favorite from '@/components/Favorite.vue'
export default {
  name: 'Favorites',
  components: { Favorite },
  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  },
  created () {
    this.$store.dispatch('fetchFavorites')
  }
}
</script>

<style>

</style>
