import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Products } from "./Data";
import { templateProducts } from "./Data";

//Starting configs >>>>>>
const app = express();
app.use(express.json());
app.use(cors());
//Ending configs <<<<<<

//Starting exercices
//Exercício 1
app.get("/test", (req, res) => {
    res.status(200).send("Endpoint corretamente configurado.");
});

//Exercício 2
//Arquivo Data.ts

//Exercício 3
app.post("/addingproduct", (req, res) => {
  const { name, price } = req.body;

  Products.push({
    id: (Products.length + 1).toString(),
    name: name,
    price: Number(price),
  });

  res.status(200).send(Products);
});

//Exercício 4
app.get("/products", (req, res) => {
  res.status(200).send(Products);
});

//Exercício 5
app.put("/editprice/:id", (req, res) => {
  const id = req.params.id;
  const price = req.body as number;

  Products.filter((p) => {
    if (p.id === id) {
      p.price = price;
    }
  });

  res.status(200).send(Products);
});

//Exercício 6
app.delete("/product/:id", (req, res) => {
  const id = req.params.id;

  const filteredItems = Products.filter((p) => {
    return p.id !== id;
  });

  res.status(200).send(filteredItems);
});

//Exercício 7








const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
