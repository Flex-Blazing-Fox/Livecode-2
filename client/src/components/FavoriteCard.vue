<template>
  <div class="favorite-container">
    <div class="card">
      <div class="card-image">
        <img :src="favorite.Animal.imageUrl" alt="card image" />
      </div>
      <div class="card-body">
        <h3>{{ favorite.Animal.name }}</h3>
        <p>{{ favorite.Animal.description }}</p>
      </div>
      <button class="delete-btn" @click.prevent="deleteFavorite(favorite.id)">
        remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteCard",
  props: ["favorite"],
  methods: {
    deleteFavorite(id) {
      this.$store.dispatch("deleteFavorite", id);
    },
  },
};
</script>