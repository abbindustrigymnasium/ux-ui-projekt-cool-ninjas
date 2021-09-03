<template>
  <div class="cakes">
    <div class="container" v-if="cakes">
      <vs-card v-for="cake in cakes.data" :key="cake.id">
        <!-- openDetailView kallas tre gånger. fy fan -->
        <template #title>
          <h3 @click="openDetailView(cake.id)">{{ cake.title }}</h3>
        </template>
        <template #img>
          <img :src="cake.image" alt="" @click="openDetailView(cake.id)" />
          <div class="price">
            <vs-button success circle>{{ cake.price }} €</vs-button>
          </div>
        </template>
        <template #text>
          <p @click="openDetailView(cake.id)">{{ cake.previewDescription }}</p>
        </template>
        <template #interactions>
          <vs-button-group>
            <vs-button :disabled="cake.amount == 0" danger class="interact-button" @click="cake.amount--">
              <i class="bx bx-minus"></i>
            </vs-button>
            <vs-button shadow disabled class="item-count"> {{ cake.amount }} </vs-button>
            <vs-button :disabled="cake.amount == 10" success class="interact-button" @click="cake.amount++">
              <i class="bx bx-plus"></i>
            </vs-button>
          </vs-button-group>
          <vs-button :disabled="cake.amount == 0" primary gradient icon @click="addToCart(cake, cake.amount)">
            <i class="bx bx-cart"></i>
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import Vue from 'vue';

export default {
  name: 'Cakes',
  data() {
    return {
      cakes: null,
    };
  },
  methods: {
    addToCart(cake, amount) {
      cake.amount = 0;
      this.$vs.notification({
        color: 'success',
        position: 'bottom-right',
        title: 'Item added',
        text: amount + ' of ' + cake.title + ' was added to your shopping cart!',
      });
    },
    openDetailView(id) {
      this.$router.push('/cake/' + id);
    },
  },
  async mounted() {
    try {
      this.cakes = await Axios.get('http://localhost:3000/cakes');
    } catch (error) {
      console.log(error);
    }
    this.cakes.data.forEach((cake) => {
      Vue.set(cake, 'amount', 0);
    });
  },
};
</script>

<style scoped lang="scss">
.cakes {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #1e2023;
  padding: 20px;
  border-radius: 5px 20px 20px 20px;
  gap: 20px;
}

.cakes img {
  height: 300px;
  filter: saturate(1.5);
}

// temporär lösning
.vs-card {
  user-select: none;
}

.vs-card:hover {
  .vs-card__interactions {
    opacity: 1;
  }
}
.vs-card__interactions {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.vs-card__text {
  height: 100px;
}

.item-count {
  opacity: 1 !important;
}

.interact-button {
  height: 31px;
}

.price {
  position: absolute;
  bottom: 0px;
  padding: 5px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  right: 0px;
}
</style>
