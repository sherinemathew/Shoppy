<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ItemComponent />
  </div>
</template>

<script>
import ItemComponent from "./components/ItemComponent.vue";

export default {
  name: "app",
  components: {
    ItemComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
