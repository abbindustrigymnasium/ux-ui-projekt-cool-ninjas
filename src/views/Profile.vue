<template>
  <div class="profile">
      Profile
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Profile',
  mounted() {
    Axios.get('http://localhost:3000/customers?id=' + this.$route.params.id)
      .then((response) => (this.cake = response.data[0]))
      .catch((error) => console.log(error));
  },
}
</script>

<style lang="scss">

</style>