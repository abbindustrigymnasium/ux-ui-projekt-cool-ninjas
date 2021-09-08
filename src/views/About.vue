<template>
  <div class="about">
    <div class="about-container">
      <h1>About us</h1>
      <h2>Our story</h2>
      <h4>A humble beginnning</h4>
      <p>
        In late 2015 we opened our first store in downtown L.A in a tiny bakery with barely enough space to fit the
        staff.
      </p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'About',
  data() {
    return {
      staff: null,
    };
  },
  async mounted() {
    try {
      this.staff = await Axios.get('http://localhost:3000/staff');
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.about-container {
}
</style>
