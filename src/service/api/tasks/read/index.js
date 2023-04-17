import axios from 'axios';
// export async function getJson(url, endpoint) {
//   try {
//     let data = await fetch(`${url}/${endpoint}`);
//     return await data.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getProducts = axios.create({
  baseURL: 'http://localhost:3000',
});

// export async function getProducts(url, endpoint) {
//   try {
//     let data = await fetch(`${url}/${endpoint}`);
//     return await data.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
