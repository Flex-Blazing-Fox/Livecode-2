<template>
  <!--Home-->
    <div class="home-container">
        <Animal v-for="animal in animals" :key="animal.id" :animal="animal"/>
    </div>
</template>

<script>
import Animal from '@/components/Animal.vue'

export default {
  name: 'Animals',
  components: { Animal },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  created () {
    this.$store.dispatch('fetchAnimals')
  }
}
</script>

<style>

</style>
