<template>
  <div class="container">
    <h1>Hello</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="items-container">
      <div
        class="item"
        v-for="(item, index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.__id"
      >
        <h3 class="item-title">{{item.name}}</h3>
        <p class="price">{{ item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ItemService from "../ItemService";

export default {
  name: "ItemComponent",
  data() {
    return {
      items: [],
      error: ""
    };
  },
  async created() {
    try {
      this.items = await ItemService.getItems();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
