<template>
  <div class="navbar">
    <vs-navbar not-line center-collapsed>
      <template #left>
        <!-- TODO: replace logo -->
        <!-- det blir error i konsolen när $router.push() kallas. lägg .catch(() => {}) -->
        <!-- <img src="https://vuesax.com/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" @click="$router.push('/')" /> -->
        <img src="../assets/logo.png" alt="" @click="$router.push('/')" />
      </template>
      <!-- TODO: put links in center -->
      <vs-navbar-item to="/" :active="$route.path == '/'"> Home </vs-navbar-item>
      <vs-navbar-item to="/cakes" :active="$route.path == '/cakes'"> Cakes </vs-navbar-item>
      <vs-navbar-item to="/about" :active="$route.path == '/about'"> About us </vs-navbar-item>
      <template #right>
        <vs-button flat v-if="Object.entries(user).length === 0" @click="loginDialogOpen = !loginDialogOpen"
          >Log in</vs-button
        >
        <!-- TODO: fix shopping cart visual glitch when logged in -->
        <vs-button circle icon gradient color="primary" to="/cart">
          <i class="bx bx-cart"></i>
        </vs-button>

        <vs-navbar-group v-if="Object.entries(user).length !== 0">
          <vs-button circle icon gradient color="primary">
            <i class="bx bx-user"></i>
          </vs-button>
          <template #items>
            <vs-navbar-item to="/orders" :active="$route.path == '/orders'"> Orders </vs-navbar-item>
            <vs-navbar-item to="/profile" :active="$route.path == '/profile'"> Profile </vs-navbar-item>
            <vs-navbar-item @click="logout()"> Log out </vs-navbar-item>
          </template>
        </vs-navbar-group>
      </template>
    </vs-navbar>
    <vs-dialog v-model="loginDialogOpen">
      <template #header>
        <h4 class="not-margin">Log in to your account</h4>
      </template>

      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input v-model="password" type="password" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="rememberMe">Remember me</vs-checkbox>
          <a href="#" @click="forgotPasswordDialogOpen = !forgotPasswordDialogOpen">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button
            @click="
              login({ email, password });
              loginDialogOpen = !loginDialogOpen;
            "
            block
          >
            Sign In
          </vs-button>

          <div class="new">
            New Here?
            <a href="#" @click="createAccountDialogOpen = !createAccountDialogOpen">Create New Account</a>
          </div>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="createAccountDialogOpen">
      <template #header>
        <h4 class="not-margin">Create account</h4>
      </template>

      <div class="con-form">
        <vs-input>
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Create account </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="forgotPasswordDialogOpen">
      <template #header>
        <h4 class="not-margin">Reset your password</h4>
      </template>

      <div class="con-form">
        <vs-input placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Reset password </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
//import axios from 'axios';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      loginDialogOpen: false,
      createAccountDialogOpen: false,
      forgotPasswordDialogOpen: false,
      rememberMe: true,
      email: 'Maximillia3@yahoo.com',
      password: 'ODcRSjVVgpsUnLM',
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions({
      login: 'setUser', // map `this.login({email, password})` to `this.$store.commit('setUser', {email, password})`
    }),
    ...mapMutations({
      logout: 'forgetUser',
    }),
  },
};
</script>

<style lang="scss">
.navbar {
  margin-bottom: 50px;
  & img {
    cursor: pointer;
    max-height: 30px;
  }
}

.vs-navbar__group__items {
  left: -120px !important;
  border-radius: 18px 5px 18px 18px !important;
}

.vs-navbar__group__item {
  padding: 0 !important;
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}

.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
  .vs-checkbox-label {
    font-size: 0.8rem;
  }
  .vs-input-content {
    margin: 10px 0px;
    width: 100%;
    .vs-input {
      width: 100%;
    }
  }
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
  }
}
a {
  color: #fff;
  margin-left: 6px;
  &:hover {
    text-decoration: underline;
  }
  text-decoration: none;
}
.vs-button {
  margin: 0px;
}
</style>
