<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
@font-face {
  font-family: "Jacksson";
  src: url("./assets/汉仪易烊千玺体.ttf");
}
#app {
  font-family: "Jacksson", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 30px;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
