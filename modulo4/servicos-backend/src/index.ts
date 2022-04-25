import app from "./app";
import { getAdddress } from "./endpoints/getAddress";

app.get("/address", getAdddress)