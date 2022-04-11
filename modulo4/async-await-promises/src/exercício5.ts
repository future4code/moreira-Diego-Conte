import axios from "axios";
import { getAllSubscribers } from "./exercício1";
import { URL_BASE } from "./URL_BASE";

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
    for (const user of users) {
      await axios.post(`${URL_BASE}/notifications`, {
        subscriberId: user.id,
        message,
      });
    }

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
