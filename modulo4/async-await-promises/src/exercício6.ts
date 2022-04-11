import axios from "axios";
import { getAllSubscribers } from "./exercício1";
import { URL_BASE } from "./URL_BASE";

// a) O 'Promise.all' realiza a sequência de requisições solicitada de modo int, isto é, sem esperar
//    que o resultado da anterior chegue para efetivar a segunda.

// b) A vantagem é o tempo: como não espera o resultado da anterior para enviar a próxima, torna-se mais rápido.

// c)
type User = {
  id: string;
  name: string;
  email: string;
};

const sendNotifications = async (
  users: User[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${URL_BASE}/notifications`, {
        subscriberId: user.id,
        message,
      });
    });

    await Promise.all(promises);
    console.log("All notifications sent.");
  } catch {
    console.log("Error");
  }
};

const main = async (): Promise<void> => {
  try {
    const users = await getAllSubscribers();
    await sendNotifications(users, "message");
  } catch (err: any) {
    console.log(err.response?.data || err.message);
  }
};

main();
