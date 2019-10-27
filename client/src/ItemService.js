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
  //delete

  //update
}

export default ItemService;
