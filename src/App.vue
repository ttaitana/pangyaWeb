<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
// import "bootstrap";
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";

// import "bootstrap/dist/css/bootstrap.min.css";

import "@/assets/js/jquery.min.js";
import "@/assets/js/bootstrap.min.js";
import "@/assets/js/jquery.waypoints.min.js";
import "@/assets/js/jquery.countup.js";
// import "@/assets/js/jquery.timeago.min.js";
// import "@/assets/js/semantic.min.js";
// import "@/assets/js/icheck.min.js";
// import "@/assets/js/jquery.aos.js";
// import "@/assets/js/wow.min.js";
// import "@/assets/js/particles/particles.min.js";
// import "@/assets/js/particles/main.script.js";
// import "@/assets/js/jquery.queryloader2.min.js";

// import "queryloader2";
import "./assets/js/eggda-studio.min.js";

export default {
  components: {}
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Kanit|Prompt";
</style>
<style lang="scss">
@import "./assets/css/animate.css";
@import "./assets/css/bootstrap.css";
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/ionicons.min.css";
@import "./assets/css/aos.css";
// @import "./assets/css/eddga-studio.css";
/* @import "./assets/css/eddga-studio_api.css";
@import "./assets/css/eddga-studio_pc.css"; */

#app {
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  td {
    background-repeat: no-repeat;
  }
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
