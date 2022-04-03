import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { CpfChecker, findingCpf } from "./CpfChecker";
import { users } from "./Data";
import { ageChecker } from "./AgeChecker";
import { accountTemplate, statementTemplate } from "./Types";
import { dateChecker } from "./DateChecker";

//Starting config >>>>>>
const app = express();
app.use(express.json());
app.use(cors());
//Ending config <<<<<<

//First endpoint
app.get("/users", (req, res) => {
  try {
    if (users.length <= 0) {throw new Error(`There are no registered users.`)};

    res.status(201).send(users);
  } catch (error: any) {
    switch (error.message) {
      case `There are no registered users.`:
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

//Second endpoint
app.get("/statement", (req, res) => {
  const checkedCpf: accountTemplate[] | string = findingCpf(
    req.query.cpf as string);
  
  const cpf: string = req.query.cpf as string;

  try {
    if (typeof checkedCpf === typeof "matrix") {
      throw new Error(`${checkedCpf}`)};

    res.status(201).send(checkedCpf);
  } catch (error: any) {
    switch (error.message) {
      case `${cpf}`:
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

//Third endpoint
app.post("/users", (req, res) => {
  const { name, CPF, birthDate } = req.body;
  const age: number | string = ageChecker(birthDate);
  const cpfChecked: boolean | string = CpfChecker(CPF);

  try {
    if (!name || !CPF || !birthDate) {
      throw new Error("Please check inputs. Missing values.")};
    if (typeof age !== typeof 1) {
      throw new Error(`${age}`)};
    if (age < 18) {
      throw new Error("Only people over 18 years can have a bank account.")};
    if (name.length < 2) {
      throw new Error('Please check "name" input. At least two characters are required.')};
    if (typeof name !== typeof "matrix") {
      throw new Error('Please verify inputs: "name" must to be string.')};
    if (typeof cpfChecked !== typeof true) {
      throw new Error(`${cpfChecked}`)};
    if (cpfChecked === false) {
      throw new Error("Please check input: only authentic CPFs are accepted.")};

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
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case `${age}`:
        res;
      case "Only people over 18 years can have a bank account.":
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
      case "Please check input: only authentic CPFs are accepted.":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

//Fourth endpoint
app.post("/pay", (req, res) => {
  const { CPF, amount, date, description } = req.body;

  if (!CPF || !amount || !description) {res.status(422).send("Please check inputs. Missing values.")};

  const checkedCpf: accountTemplate[] | string = findingCpf(CPF);
  const checkedDate: string | boolean = dateChecker(date);
  let fillingDate: string | number = date;

  try {
    if (typeof checkedCpf === typeof "matrix") {
      throw new Error(`${checkedCpf}`)};
    if (typeof amount !== typeof 1 || amount <= 0) {
      throw new Error('Please check "amount" input.It must to be a number greater then 0.')};
    if (typeof description !== typeof "matrix") {
      throw new Error('Please check inputs: "description" must to be string.')};
    if (typeof checkedDate === typeof "matrix") {
      throw new Error(`${checkedDate}`)};
    if (checkedDate === false) {
      throw new Error("Check bill`s date. Retroactive dates are not allowed.")};

    users.filter((u) => {
      if (u.CPF === CPF) {
        if (u.balance < amount) {
          throw new Error("There is not enough balance in your account.")};
        if (!date) {
          fillingDate = new Date().getTime();
        }
        u.statement.push({
          value: Number(amount),
          date: fillingDate,
          description: description,
        });
        return res.send(u);
      } else {
        throw new Error("Please check inputs: no user found.");
      }
    });
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case 'Please check "amount" input.It must to be a number greater then 0.':
        res.status(422);
        break;
      case 'Please check inputs: "description" must to be string.':
        res.status(422);
        break;
      case `${checkedCpf}`:
        res.status(422);
        break;
      case `${checkedDate}`:
        res.status(422);
        break;
      case "Check bill`s date. Retroactive dates are not allowed.":
        res.status(422);
        break;
      case "There is not enough balance in your account.":
        res.status(422);
        break;
      case "Please check inputs: no user found.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

// Fifth endpoint
app.post("/transfer", (req, res) => {
  const { sourceName, sourceCPF, targetName, targetCPF, amount } = req.body;
  let transfers: accountTemplate[] = [];

  if (!sourceName || !sourceCPF || !targetName || !targetCPF || !amount) {
    res.status(422).send("Please check inputs. Missing values.")};

  const checkedSourceCpf: accountTemplate[] | string = findingCpf(sourceCPF);
  const checkedTargetCPF: accountTemplate[] | string = findingCpf(targetCPF);

  try {
    if (typeof checkedSourceCpf === typeof "matrix") {
      throw new Error(`${checkedSourceCpf}`)};
    if (typeof checkedTargetCPF === typeof "matrix") {
      throw new Error(`${checkedTargetCPF}`)};
    if (typeof amount !== typeof 1 || amount <= 0) {
      throw new Error('Please check "amount" input.It must to be a number greater then 0.')};

    users.filter((u) => {
      if (u.CPF === sourceCPF) {
        if (u.balance < amount) {
          throw new Error("There is not enough balance in your account.")};

        return u.statement.push({
          value: -Number(amount),
          date: new Date().getTime(),
          description: `Transfered to ${targetName}.`,
        });
      }
    });

    users.filter((u) => {
      if (u.CPF === targetCPF) {
        return u.statement.push({
          value: Number(amount),
          date: new Date().getTime(),
          description: `Transfered from ${sourceName}.`,
        });
      }
    });

    res.send(users);
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case 'Please check "amount" input.It must to be a number greater then 0.':
        res.status(422);
        break;
      case `${checkedSourceCpf}`:
        res.status(422);
        break;
      case `${checkedTargetCPF}`:
        res.status(422);
        break;
      case "There is not enough balance in your account.":
        res.status(422);
        break;
      case "Please check inputs: no user found.":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});


//Sixth endpoint
app.put("/deposit", (req, res) => {
  const { name, CPF, amount } = req.body;
  const checkedCpf: accountTemplate[] | string = findingCpf(CPF);

  try {
    if (!name || !CPF || !amount) {
      throw new Error("Please check inputs. Missing values.")};
    if (name.length < 2) {
      throw new Error('Please check "name" input. At least two characters are required.')};
    if (typeof name !== typeof "matrix") {
      throw new Error('Please check inputs: "name" must to be string.')};
    if (typeof checkedCpf === typeof "matrix") {
      throw new Error(`${checkedCpf}`)};
    if (typeof amount !== typeof 1) {
      throw new Error('Please check inputs: "amount" must to be a number.')};
    if (amount <= 0) {
      throw new Error('Please check input: "amount" must to be greater than 0.')};

    users.filter((u) => {
      if (u.name === name && u.CPF === CPF) {
        u.balance += Number(amount);
        u.statement.push({
          value: Number(amount),
          date: new Date().getTime(),
          description: "Money deposit.",
        });
        return res.send(u);
      } else {
        throw new Error("Please check inputs: no user found.");
      }
    });
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case 'Please check "name" input. At least two characters are required.':
        res.status(422);
        break;
      case 'Please check inputs: "name" must to be string.':
        res.status(422);
        break;
      case `${checkedCpf}`:
        res.status(422);
        break;
      case 'Please check inputs: "amount" must to be a number.':
        res.status(422);
        break;
      case "Please check inputs: no user found.":
        res.status(404);
        break;
      case 'Please check input: "amount" must to be greater than 0.':
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

//Seventh endpoint
app.put("/balance", (req, res) => {
  const cpf: string = req.query.cpf as string;
  if (!cpf) {throw new Error("Please check inputs. Missing values.")};

  const checkedCpf: accountTemplate[] | string = findingCpf(req.query.cpf as string);

  try {
    if (typeof checkedCpf === typeof "matrix") {
      throw new Error(`${checkedCpf}`)};

    users.forEach((u) => {
      if (cpf === u.CPF) {
        u.statement.forEach((s, i) => {
          if (s.description !== "Money deposit.") {
            for (let i = 0; i < users[i].statement.length; i++) {
              users[i].balance = users[i].balance - users[i].statement[i].value;
            }
          }
        });
      }
    });

    const usersBalance = users.filter((u)=> {
      return u.CPF === cpf
    })

    res.send(usersBalance);

  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case `${checkedCpf}`:
        res.status(422)
        break
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});



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
