import axios from "axios";
import { URL_BASE } from "./URL_BASE";

type user = {
  id: string;
  name: string;
  email: string;
};

// a) Não haverá erro nenhum.

// b) Mapear os resultados de uma promisse é indicado porque deixa nosso código mais organizado,
//    consistente e 'redondo'.

// c)
const getAllSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${URL_BASE}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const main = async (): Promise<void> => {
  try {
    const subscribers = await getAllSubscribers();
    console.log(subscribers);
  } catch (err: any) {
    console.log(err.response?.data || err.message);
  }
};

main();
