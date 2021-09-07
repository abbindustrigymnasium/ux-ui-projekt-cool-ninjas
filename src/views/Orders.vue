<template>
  <div class="orders">
    <div class="orders-container">
      <h1>Orders</h1>
      <vs-table v-model="selected" v-if="orders">
        <template #thead>
          <vs-tr>
            <vs-th> Date </vs-th>
            <vs-th> Total Price </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="order.id" v-for="order in orders.data" :data="order" :is-selected="selected == order">
            <vs-td>
              {{ order.timestamp }}
            </vs-td>
            <vs-td> {{ order.totalPrice.toFixed(2) }} € </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-table v-if="selected">
        <template #thead>
          <vs-tr>
            <vs-th> Name </vs-th>
            <vs-th> Quantity </vs-th>
            <vs-th> Price </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="cake.cakeId" v-for="cake in selected.cakes" :data="cake">
            <!-- det borde funka. jag vet inte varför det inte funkar. fråga jockeimorgon. -->
            <vs-td>
              {{ getCakeById(cake.cakeId).title }}
            </vs-td>
            <vs-td> {{ cake.quantity }} </vs-td>
            <vs-td> {{ getCakeById(cake.cakeId).price }} </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-button @click="selected = null" v-if="selected" block
        >Clear selection<i class="bx bx-x-circle"></i>
      </vs-button>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'Orders',
  data() {
    return {
      orders: null,
      selected: null,
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  async mounted() {
    try {
      this.orders = await Axios.get(`http://localhost:3000/orders?customerId=${this.user.id}`);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getCakeById: async function (id) {
      try {
        let cake = await Axios.get(`http://localhost:3000/cakes?id=${id}`);
        return cake.data[0];
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss">
.orders {
  display: flex;
  align-items: center;
  justify-content: center;
  .orders-container {
    width: 85vw;
    background: #1e2023;
    padding: 0 20px 0 20px;
    border-radius: 5px 20px 20px 20px;
    > * {
      margin-bottom: 20px;
    }
  }
}
</style>
