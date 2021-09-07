<template>
  <div class="cart">
    <div class="cart-container">
      <h1>Shopping Cart</h1>
      <vs-card type="3" v-for="item in cart" :key="item.id">
        <template #title>
          <h3>{{ item.title }}</h3>
        </template>
        <template #img>
          <img :src="item.image" alt="" />
        </template>
        <template #text>
          <p>{{ item.previewDescription }}</p>
          <h3>{{ item.price }}€ / styck</h3>
        </template>
        <template #interactions>
          <vs-button-group>
            <vs-button @click="decrementAmount(item)" danger class="interact-button">
              <i class="bx bx-minus"></i>
            </vs-button>
            <vs-button shadow disabled class="item-count"> {{ item.amount }} </vs-button>
            <vs-button @click="incrementAmount(item)" :disabled="item.amount >= 10" success class="interact-button">
              <i class="bx bx-plus"></i>
            </vs-button>
          </vs-button-group>
        </template>
      </vs-card>
      <div class="details">
        <span>Total: {{ price }}€</span>
        <!-- Knappen är rektangel. Varför? jag vet inte. -->
        <vs-button @click="addToCart()" circle size="xl" gradient icon primary>
          <i class="bx bx-cart"></i>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      cakes: null,
    };
  },
  computed: {
    ...mapGetters(['cart', 'user']),
    price: function () {
      let price = 0;
      this.cart.forEach((item) => {
        price += item.price * item.amount;
      });
      return price.toFixed(2);
    },
  },
  methods: {
    ...mapMutations(['incrementAmount', 'decrementAmount']),
    addToCart: async function () {
      let post = {
        // placeholder!
        customerId: 9,
        cakes: [
          { cakeId: 4, quantity: 2 },
          { cakeId: 1, quantity: 7 },
        ],
        totalPrice: 4,
        timestamp: '2021-05-04T20:14:58.412Z',
      };
      await Axios.post('localhost:3000/orders', post);
    },
  },
};
</script>

<style lang="scss">
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto !important;
    height: 150px !important;
  }
  .vs-card {
    max-width: none !important;
  }
  .details {
    display: flex;
    justify-content: space-between;
  }
  .interact-button {
    height: 31px;
  }
  .item-count {
    opacity: 1 !important;
  }
  .vs-card {
  }
}

.cart-container {
  width: 85vw;
  background: #1e2023;
  padding: 0 20px 0 20px;
  border-radius: 5px 20px 20px 20px;
  > * {
    margin-bottom: 20px;
  }
}
</style>
