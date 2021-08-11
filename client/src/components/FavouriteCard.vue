<template>
  <div class="card">
        <div class="card-image">
          <img
            :src="favourite.Animal.imageUrl"
            alt="card image"
          />
        </div>
        <div class="card-body">
          <h3>{{favourite.Animal.name}}</h3>
          <p>{{favourite.Animal.description}}</p>
        </div>
        <button @click="$store.dispatch('deleteFavourite', favourite.id)" class="delete-btn">remove</button>
      </div>
</template>

<script>
export default {
  name: 'FavouriteList',
  props: ['favourite']
}
</script>
