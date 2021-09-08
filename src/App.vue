<template>
  <div class="app">
    <Navbaren></Navbaren>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbaren from './components/Navbaren.vue';
import Footer from './views/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbaren,
    Footer,
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
@font-face{
  font-family: 'Poppins-Bold';
  src: local("Poppins-Bold"),
   url(./Fonts/Poppins-Bold.ttf) format("truetype");
}
@font-face{
  font-family: 'Poppins-SemiBold';
  src: local("Poppins-SemiBold"),
   url(./Fonts/Poppins-SemiBold.ttf) format("truetype");
}
@font-face{
  font-family: 'Poppins';
  src: local("Poppins"),
   url(./Fonts/Poppins-Regular.ttf) format("truetype");
}
@font-face {
  font-family: 'Rembank';
  src: local("Rembank"),
   url(./Fonts/Rembank.otf) format("opentype")
}

#app {
  font-family: 'Poppins-Bold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

body {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  background: #6691A4;
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
:root{
  --vs-background: #5C8BA0 !important;
  --vs-text: #FFF3E1 !important;
  --vs-color: #FFF3E1 !important;
  }
</style> 
