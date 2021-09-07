<template vs-theme="transperent">
  <div id="navbar">
    <img :src="navbarLogo" id="navbarLogo">
    <div id="mainButtons">
        <button @click="$router.push('/')" id="navButton" class="wow"> home </button>
        <button @click="$router.push('/cakes')" id="navButton" class="mainbut"> cakes </button>
        <button @click="$router.push('/about')" id="navButton" class="mainbut"> about us </button>
    </div>
    <div id="loginButtons">
        <button id="navButton" v-if="Object.keys(user).length === 0" flat @click="loginDialogOpen = !loginDialogOpen">Log in</button>
        <div v-if="Object.keys(user).length !== 0">
            <button circle icon gradient color="primary" id="profileLogo">
            <i class="bx bx-user"></i>
            </button>
            <button @click="$router.push('/orders')" id="navButton"> Orders </button>
            <button @click="$router.push('/profile')" id="navButton" class="profileButton"> Profile </button>
            <button @click="logout()" id="navButton"> Log out </button>
    </div>
        <hr>
        <button id="cartButton" circle icon gradient color="primary" @click="$router.push('/cart')">
            <i class="bx bx-cart"></i>
        </button>
    </div>





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
          <vs-checkbox v-model="saveAuth">Remember me</vs-checkbox>
          <a href="#" @click="forgotPasswordDialogOpen = !forgotPasswordDialogOpen">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="login(email, password)"> Sign In </vs-button>

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
import axios from 'axios';
import navbarLogo from '../assets/navbarLogo.png'

export default {
  name: 'Navbaren',
  data() {
    return {
      loginDialogOpen: false,
      createAccountDialogOpen: false,
      forgotPasswordDialogOpen: false,
      user: {},
      saveAuth: false,
      email: 'Maximillia3@yahoo.com',
      password: 'ODcRSjVVgpsUnLM',
      navbarLogo: navbarLogo,
    };
  },
  // Example user
  // Maximillia3@yahoo.com
  // ODcRSjVVgpsUnLM
  methods: {
    async login(email, password) {
      let user;
      console.log('Logging in...');
      try {
        user = await axios.get('http://localhost:3000/customers?email=' + email);
      } catch (e) {
        console.error(e);
        return;
      }
      if (user.data[0].password === password) {
        this.user = user.data[0];
        console.log('Successfully logged in!');
        if (this.saveAuth) {
          localStorage.setItem('user', JSON.stringify(user.data[0]));
        }
        this.loginDialogOpen = false;
      }
    },
    logout() {
      this.user = {};
      localStorage.removeItem('user');
      this.$router.push('/');
    },
  },
  mounted() {
    // det är möjligt att vue har inbyggt stöd för objekt i localstorage, men jag fick det inte att funka så jag använder stringify
    if (localStorage.getItem('user')) {
      console.log(JSON.parse(localStorage.getItem('user')));
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  },
};
</script>

<style>
    #navbar{
        position: absolute;
        display: flex;
        flex-direction: row;
        z-index: 1;
        height: 6.7vw;
        width: 70vw;
        margin-left: 15vw;
        transition: 200ms;
    }
    #mainButtons{
        margin-left: 2vw;
        text-align: center;
    }
    #navButton{
        background-color: transparent;
        border: none;
        font-family: 'Poppins-Bold';
        color: #FFF3E1;
        font-size: 1.15vw;
        letter-spacing: 0.05vw;
        margin: 1vw;
        display: inline-block;
        transform-origin: center;
    }
    #navButton:after {
        display:block;
        content: '';
        border-bottom: solid 3px #FFF3E1;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        }
    #navButton:hover:after { 
        transform: scaleX(1); 
    }
    .mainbut{
        padding-top: 1.5vw;

    }
    #loginButtons{
        align-items: center;
        flex-direction: row;
        display: flex;
        right: 0;
        margin-left: auto;
    }
    #loginButtons hr{
        background-color: #FFF3E1;
        height: 2.2vw;
        width: 0.1vw;
        border: none;
    }
    #cartButton{
        background-color: transparent;
        color: #FFF3E1;
        border: none;
        font-size: 2.5vw;
        margin: 1vw;
    }
    #profileLogo{
        cursor: default;
        font-size: 1.5vw;
        margin-right: 0;
        background-color: transparent;
        color: #FFF3E1;
        border: none;
    }
</style>
