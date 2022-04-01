import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { CpfChecker } from "./CPFchecker";
import { users } from "./Data";
import { ageChecker } from "./AgeChecker";

//Starting config >>>>>>
const app = express();
app.use(express.json());
app.use(cors());
//Ending config <<<<<<

//Firts endpoint
app.post("/users", (req, res) => {
  const { name, CPF, birthDate } = req.body;
  const age: number | string = ageChecker(birthDate);
  const cpfChecked: boolean | string = CpfChecker(CPF);

  try {
    if (!name || !CPF || !birthDate) {
      throw new Error('Please check inputs. Missing values.')};
    if (typeof age !== typeof 1) {
      throw new Error(`${age}`)};
    if (age < 18) {
      throw new Error(
        'Only people over 18 years can have a bank account.')};
    if (name.length < 2) {
      throw new Error(
        'Please check "name" input. At least two characters are required.')};
    if (typeof name !== typeof "alpha") {
      throw new Error('Please verify inputs: "name" must to be string.')};
    if (typeof cpfChecked !== typeof true) {
      throw new Error(`${cpfChecked}`)};
    if (cpfChecked === false) {
      throw new Error('Please check input: only authentic CPFs are accepted.')};

    users.push({
      name,
      CPF,
      birthDate,
      balance: 0,
      statement: [],
    });

    res.status(201).send(users);

  } catch (error: any) {
    switch (error.message) {
      case 'Please check inputs. Missing values.':
        res.status(422);
        break;
      case `${age}`:
        res;
      case 'Only people over 18 years can have a bank account.':
        res.status(422);
        break;
      case 'Please check "name" input. At least two characters are required.':
        res.status(422);
        break;
      case 'Please verify inputs: "name" must to be string.':
        res.status(422);
        break;
      case `${cpfChecked}`:
        res.status(409);
        break;
      case 'Please check input: only authentic CPFs are accepted.':
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

//Second endpoint
app.get('/users', (req, res) => {
    try {
        if(users.length <= 0) {
            throw new Error(`There are no registered users.`)}
    
        res.status(201).send(users)
        
    } catch (error: any) {
        switch(error.message){
            case `There are no registered users.`:
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }  
})

//Starting listener >>>>>>
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//Ending listener <<<<<<
