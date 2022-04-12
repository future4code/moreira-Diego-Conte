import axios from "axios";
import { URL_BASE } from "./URL_BASE";

// a) Creio que a diferença estena na posição do 'async': enquanto que na função nomeada está antes de declarada
//    a função, na arrow function está depois do nome.

// b)
const getAllSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${URL_BASE}/subscribers`);
    return response.data;
  }
  
  const main = async (): Promise<void> => {
    try {
      const subscribers = await getAllSubscribers();
      console.log(subscribers);
    } catch (err: any) {
      console.log(err.response?.data || err.message);
    }
  };
  
  main();
  