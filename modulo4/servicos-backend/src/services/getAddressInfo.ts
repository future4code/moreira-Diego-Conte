import axios from "axios";
import { Address } from "../types/types";
import { BASE_URL } from "./BASE_URL";

export const getAddressInfos = async (zipcode: string): Promise<Address | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/${zipcode}/json/`);

    const address: Address = {
      state: response.data.uf,
      city: response.data.localidade,
      district: response.data.bairro,
      street: response.data.logradouro,
    };

    return address;
  } catch (error) {
    console.error("An unexpected error occurred: ", error);
    return null;
  }
};

// const insertUsers = () =>
//   connection("AddressUser")
//     .insert(data)
//     .then(() => {
//       return "User successfully registered.";
//     })
//     .catch((e) => e.response?.data || e.message);
