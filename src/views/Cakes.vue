<template>
  <div class="cakes">
    <div class="container" v-if="cakes">
      <vs-card v-for="cake in cakes" :key="cake.id">
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
            <vs-button
              :disabled="amount == 0"
              danger
              class="interact-button"
              @click="amount--"
            >
              <i class="bx bx-minus"></i>
            </vs-button>
            <vs-button shadow disabled class="item-count">
              {{ amount }}
            </vs-button>
            <vs-button
              :disabled="amount == 10"
              success
              class="interact-button"
              @click="amount++"
            >
              <i class="bx bx-plus"></i>
            </vs-button>
          </vs-button-group>
          <vs-button
            :disabled="amount == 0"
            primary
            gradient
            icon
            @click="openNotification(cake, amount)"
          >
            <i class="bx bx-cart"></i>
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Cakes',
  data() {
    return {
      cakes: null,
      amount: 0,
    };
  },
  methods: {
    openNotification(cake, amount) {
      this.$vs.notification({
        color: 'success',
        position: 'top-right',
        title: 'Item added',
        text:
          amount + ' of ' + cake.title + ' was added to your shopping cart!',
      });
    },
    openDetailView(id) {
      this.$router.push('/cake/' + id);
    },
  },
  mounted() {
    Axios.get('http://localhost:3000/cakes')
      .then((response) => (this.cakes = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss">
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
