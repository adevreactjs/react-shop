import axios from 'axios';




export default class PostService {

  static async postItems() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
