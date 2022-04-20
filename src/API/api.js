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

  static async getToken( userName) {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: "mor_2314",
        password: "83r5^_fdfdfdfdf"
    });
      console.log(response.data);
      console.log('t');
      return response;
    } catch (e) {
      console.log('f');

      console.log(e);
    }
  }


}
