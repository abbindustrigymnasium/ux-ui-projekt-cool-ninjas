<template>
  <div>
    <h1>Home</h1>
    
    <div v-for="cake in cakes" v-bind:key="cake.id">
    <div>
        <router-link :to="'item/' + cake.id">{{cake.title}}</router-link>
    </div>
      <img :src="cake.image" alt="cakes">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
      return {
          cakes: null
      }
  },
  mounted () {
    axios
    .get('http://localhost:3000/cakes')
    .then(response => (this.cakes = response.data))
    .catch(error => console.log(error))
  }
}
</script>

<style scoped>
img {
    width: 200px;
}
</style> 