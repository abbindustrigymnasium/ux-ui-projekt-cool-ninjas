<template>
  <section class="hero">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> home </a>

          <a class="navbar-item"> about us </a>

          <a class="navbar-item"> cakes </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Log in</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <h1>Home</h1>

    <div v-for="cake in cakes" v-bind:key="cake.id">
      <div>
        <router-link :to="'item/' + cake.id">{{ cake.title }}</router-link>
      </div>
      <img :src="cake.image" alt="cakes" />
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      cakes: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => (this.cakes = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
</style> 