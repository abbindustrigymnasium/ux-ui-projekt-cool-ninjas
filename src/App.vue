<template>
  <div id="app">
    <!-- <div v-for="data in db" v-bind:key="data.id">
      <p>{{data.title}}</p>
      <img :src="data.image" alt="cakes">
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import json from '../db.json'

export default {
  name: 'App',
  components: {
    // hej
  },
  data() {
    return {
      db: json.cakes,
    }
  }
}

//console.log(this.db)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
