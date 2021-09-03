<template>
  <div class="cake" v-if="cake">
      <h1>{{cake.title}}</h1>
      <img :src="cake.image" alt="ja den är god">
      <p>{{cake.detailDescription}}</p>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Cake',
  data() {
      return {
          cake: null
      }
  },
  mounted() {
    Axios.get('http://localhost:3000/cakes?id=' + this.$route.params.id)
      .then((response) => (this.cake = response.data[0]))
      .catch((error) => console.log(error));
  },
}
</script>

<style lang="scss">
  .cake img {
    filter: saturate(1.5);
  }
</style>