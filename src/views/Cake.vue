<template>
  <div class="cake" v-if="cake">
    <div class="cake-container">
      <h1>{{ cake.title }}</h1>
      <img :src="cake.image" alt="ja den är god" />
      <p>{{ cake.detailDescription }}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Cake',
  data() {
    return {
      cake: null,
    };
  },
  mounted() {
    Axios.get('http://localhost:3000/cakes?id=' + this.$route.params.id)
      .then((response) => (this.cake = response.data[0]))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss">
.cake {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 20px;
  }
  .cake-container {
    width: 50vw;
    background: #1e2023;
    padding: 0 20px 0 20px;
    border-radius: 5px 20px 20px 20px;
    > * {
      margin-bottom: 20px;
    }
  }
}
</style>
