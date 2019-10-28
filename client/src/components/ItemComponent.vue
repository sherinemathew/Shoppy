<template>
  <div class="container">
    <h1>Welcome to The Sunglasses Company</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="form" v-if="isAdmin">
      <h3 class="title">Enter new Item</h3>
      <input v-model="newItemName" required placeholder="New Item">
            <h3 class="title">Add a description</h3>
      <input v-model="newItemDescription" placeholder="Enter Description ..">
            <h3 class="title">Category</h3>
      <input v-model="newItemCategory" required placeholder="Category">
      <h3 class="title">Price</h3>
      <input v-model="newItemPrice" placeholder="Price">
<br>
      <div class="item">
          <h3 class="item-title">{{newItemName}}</h3>
          <h4>{{ newItemCategory }}</h4>
          <p>{{ newItemDescription }}</p>
          <p class="price">${{ newItemPrice}}</p>
          <button v-on:click="createItem">Create</button>
      </div>
    </div>
    <div class="items-container">
      <div
        class="item"
        v-for="(item, index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item._id"
        v-on:dblclick="deleteItem(item._id)"
      >
        <h3 class="item-title">{{item.name}}</h3>
        <p class="price">${{ item.price}}</p>
        <button v-on:click="deleteItem(item._id)">Delete</button>
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
      isAdmin: true,
      items: [],
      error: "",
      price: "",
      name: "",
      newItemName: "",
      newItemPrice: "",
      newItemPic: "",
      newItemCategory:"",
      newItemDescription:"",
    };
  },
    async created() {
    try {
      this.items = await ItemService.getItems();
    } catch (err) {
      this.error = err.message;
    }
  },
  //  computed: {
  //   newItem: function () {
  //     return this.newItemName + this.newItemPrice 
  //     // + this.newItemDescription + this.newItemCategory
  //   }
  // },
 methods: { 
   async createItem() {
     await ItemService.insertItem(this.newItemName);
     this.items = await ItemService.getItems();
   },
    async deleteItem(id) {
      await ItemService.deleteItem(id);
      this.items = await ItemService.getItems();
    }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.item {
  position: relative;
  border: 1px solid #070707;
  background-color: #9da79daa;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  
  margin-bottom: 0;
}
</style>
