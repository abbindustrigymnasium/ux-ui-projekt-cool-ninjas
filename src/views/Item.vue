<template>
  <div>
    <h1>Item</h1>
    <template v-if="error">
      <h3>Error</h3>
    </template>
    <template v-else>
      <h3>{{ loading ? "Loading..." : cake.title }}</h3>
      <img v-if="!loading" :src="cake.image" alt="Cake" />
      <p>{{ loading ? "Loading..." : cake.detailDescription }}</p>
      <router-link to="/">Home</router-link>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Item",
  data() {
    return {
      cake: null,
      id: this.$route.params.id,
      error: false,
      loading: true,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/cakes?id=" + this.id)
      .then((response) => {
        this.cake = response.data[0];
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
img {
  width: 300px;
}
</style>