<template>
    <div class="card">
        <div class="card-image">
        <img
            :src="favorite.Animal.imageUrl"
        />
        </div>
        <div class="card-body">
        <h3>{{favorite.Animal.name}}</h3>
        <p>{{favorite.Animal.description}}</p>
        </div>
        <button class="delete-btn">remove</button>
    </div>
</template>

<script>
export default {
  name: 'Favorite',
  props: ['favorite'],
  methods: {}
}
</script>

<style>

</style>
