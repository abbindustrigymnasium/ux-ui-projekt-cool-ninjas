<template>
  <div class="profile">
    <div class="profile-container">
      <vs-avatar circle size="100">
        <img :src="user.avatar" alt="" />
      </vs-avatar>

      <vs-input :value="user.name" placeholder="Name">
        <template #message-danger> Required </template>
      </vs-input>

      <vs-input :value="user.avatar" placeholder="Image URL">
        <template #message-danger> Required </template>
      </vs-input>

      <vs-input type="password" placeholder="Password">
        <template #message-warn> Insecure password </template>
      </vs-input>
      <vs-button block>Change</vs-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['user']),
  },
};
</script>

<style lang="scss">
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-container {
  background: #1e2023;
  padding: 20px;
  border-radius: 5px 20px 20px 20px;
  width: 500px;
  > * {
    margin-bottom: 20px;
  }
}

.vs-input {
  width: 100% !important;
}
</style>
