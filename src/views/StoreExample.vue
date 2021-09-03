<template>
  <div class="store-example">
    <p>{{JSON.stringify(user)}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Store Example',
  computed: {
    ...mapGetters([
      'user'
    ])
  }
};
</script>

<style lang="scss"></style>
