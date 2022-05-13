import cors from "cors";
import express from "express";
import { AddressInfo } from "net";
import { bandRouter } from "./controller/router/BandRouter";
import { showRouter } from "./controller/router/ShowRouter";
import { userRouter } from "./controller/router/UserRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/bands", bandRouter);
app.use("/shows", showRouter)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
