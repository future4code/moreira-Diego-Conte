import axios from "axios";
import { URL_BASE } from "./URL_BASE";

// a) A função será :Promise<void> porque não retorna dado nenhum (ou um vetor vazio);

// b)

const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  await axios.put(`${URL_BASE}/news`, {
    title,
    content,
    date,
  });
};

  
