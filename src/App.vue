<template>
  <div class="app">
    <navbar></navbar>
    <router-view />
    <!-- TODO: add footer -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
// default app grej
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  background: #18191c;
  color: #fff;
  margin: 0;
}

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background-color: #18191c;
}

html::-webkit-scrollbar-thumb {
  background: #4e4e4e;
  border-radius: 5px;
}
</style>
