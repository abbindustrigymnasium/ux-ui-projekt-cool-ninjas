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
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
      <div class="details">
        <span>Total: {{ price }}€</span>
        <!-- Knappen är rektangel. Varför? jag vet inte. -->
        <vs-button circle size="xl" gradient icon primary>
          <i class="bx bx-cart"></i>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      cakes: null,
    };
  },
  computed: {
    ...mapGetters(['cart']),
    price: function () {
      let price = 0;
      this.cart.forEach((item) => {
        price += item.price;
      });
      return (price * 1.25).toFixed(2);
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
    height: 150px;
  }
  .vs-card {
    max-width: none !important;
  }
  .details {
    display: flex;
    justify-content: space-between;
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
