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
      <p>
        In 2017 we started to expand and even though we have many more stores all over the West Coast, the core idea has
        stayed the same
      </p>
      <h1>Staff</h1>
      <vs-card-group>
        <vs-card :key="person.id" v-for="person in staff">
          <template #title>
            <h3>{{ person.name }}</h3>
          </template>
          <template #img>
            <img :src="person.avatar" alt="" />
          </template>
          <template #text>
            <p>{{ person.email }}</p>
            <p>{{ person.phone }}</p>
          </template>
        </vs-card>
      </vs-card-group>
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
  mounted() {
    Axios.get('http://localhost:3000/staff')
      .then((response) => (this.staff = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss">
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  .about-container {
    width: 50vw;
    background: #1e2023;
    padding: 0 20px 0 20px;
    border-radius: 5px 20px 20px 20px;
    > * {
      margin-bottom: 20px;
    }
  }
}

.vs-card__group-cards::-webkit-scrollbar {
  height: 14px;
}

.vs-card__group-cards::-webkit-scrollbar-track {
  background-color: #18191c;
}

.vs-card__group-cards::-webkit-scrollbar-thumb {
  background: #4e4e4e;
  border-radius: 7px;
}
</style>
