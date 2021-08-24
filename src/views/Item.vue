<template>
<div>
  <h1>Item</h1>
  <h3>{{cake ? cake.title : 'Loading...'}}</h3>
  <img v-if="cake" :src="cake.image" alt="Cake">
  <p>{{cake ? cake.detailDescription : 'Loading...'}}</p>
  <router-link to="/">Home</router-link>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Item',
  data() {
      return {
          cake: null,
          id: this.$route.params.id
      }
  },
  mounted() {
    axios.get('http://localhost:3000/cakes?id=' + this.id).then(response => (this.cake = response.data[0]))
  }
}
</script>

<style scoped>
img {
    width: 300px;
}
</style>