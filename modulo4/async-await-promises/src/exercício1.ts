import axios from "axios";
import { URL_BASE } from "./URL_BASE";

// a) Usaria o endpoint GET.

// b) async():Promise<any[]>.

// c)
export async function getAllSubscribers(): Promise<any[]> {
  const response = await axios.get(`${URL_BASE}/subscribers`);
  return response.data;
}

const main = async (): Promise<void> => {
  try {
    const subscribers = await getAllSubscribers();
    // console.log(subscribers);
  } catch (err: any) {
    console.log(err.response?.data || err.message);
  }
};

main();
