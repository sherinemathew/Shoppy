import axios from "axios";

const url = "http://localhost:3000/api/items/";

class ItemService {
  //Get Items
  static getItems() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(item => ({
            ...item,
            createdAt: new Date(item.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Add an item

  static insertItem() {
    return axios.post(url, {"name": "Outdoorsman", "price": "200", "description": "Available", "category": "Square" })

  }
  // Delete an item
  static deleteItem(id) {
    return axios.delete(`${url}${id}`);
  }

  // Update an item

  static updateItem(id) {
    return axios.post(`${url}${id}`,{

    });
  }
}
// axios.post(url[, data[, config]])


export default ItemService;
