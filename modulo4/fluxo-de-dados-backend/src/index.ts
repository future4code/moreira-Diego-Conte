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
app.post('/products', (req, res) => {
  try {
    const { name, price } = req.body;

    if (price <= 0) {throw new Error('"Price" deve ser maior que 0.')};
    if (!name || !price) {throw new Error("Um ou mais campos ausentes")};
    if (typeof name !== "string") {throw new Error('"nameProduct" deve ser uma string.')};
    if (typeof price !== typeof 5) {throw new Error('"price" informado deve ser um número.')};

    Products.push({
      id: (Products.length + 1).toString(),
      name: name,
      price: price,
    });

    res.status(201).send(Products);
  } catch (error: any) {
    switch (error.message) {
      case '"Price" deve ser maior que 0.':
        res.status(422);
        break;
      case '"price" informado deve ser um número.':
        res.status(422);
        break;
      case '"nameProduct" deve ser uma string.':
        res.status(422);
        break;
      case "Um ou mais campos ausentes":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

//Exercício 8
app.put("/price/:id", (req, res) => {
    
    try {
    const id = req.params.id;
    const price = req.body.price;
    if(price <= 0){throw new Error(('"Price" deve ser maior que 0.'))};
    if(!price){throw new Error('"Price" não informado.')};
    if(typeof price !== typeof 1){throw new Error('"Price" deve ser um número.')};
    let isproduct: boolean = false

    Products.filter((p) => {
        if (p.id === id) {
          p.price = price;
          isproduct = true
        }
      });
    
    if(!isproduct){throw new Error('Produto não encontrado.')}
      
      res.status(200).send(Products)
    } catch (error:any) {
        switch(error.message){
            case '"Price" deve ser maior que 0.':
                res.status(422)
                break
            case '"Price" não informado.':
                res.status(422)
                break
            case '"Price" deve ser um número.':
                res.status(422)
                break
            case 'Produto não encontrado.':
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send(error.message)
    }
  });

  //Exercício 9
  app.delete("/deleteproduct/:id", (req, res) => {

    try {
        const id = req.params.id;
        let isProduct: boolean = false;

        Products.forEach((p, i)=>{
            if(p.id === id){
                Products.splice(i, 1);
                isProduct = true
            }
        })
        if(!isProduct){throw new Error('Produto não encontrado.')}

        res.status(200).send(Products);
        
    } catch (error: any){
        switch(error.message){
            case 'Produto não encontrado.':
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
  });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
