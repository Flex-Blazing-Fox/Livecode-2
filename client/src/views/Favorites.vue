<template>
  <div>
    <div class="favorite">
      <h1>My Favorites Animals</h1>
    </div>
    <div v-for="favorite in favorites" :key="favorite.id">
      <FavoriteCard :favorite="favorite"></FavoriteCard>
    </div>
  </div>
</template>

<script>
import FavoriteCard from "../components/FavoriteCard.vue";
export default {
  name: "Favorites",
  components: { FavoriteCard },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  created() {
    this.$store.dispatch("getFavorites");
  },
};
</script>