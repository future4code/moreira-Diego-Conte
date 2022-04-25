# INTRODUÇÃO À AUTENTICAÇÃO

## Exrcícios

### 1.a

Creio que usar números para representar IDs seja mais performático, porém por questões de escalabilidade e segurança
é lógico que usemos strings.

### 1.b

```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
```

### 2.a

O código abaixo possibilita a conexão ao Banco de Dados via knex (as configurações estão protegidas pelo dotenv) e permite a criação de um usuário por meio da função createUser, que recebe ID, e-mail e senha e os insere na tabela 'User' (string da variável userTableName).

```
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

### 2.b

```
CREATE TABLE IF NOT EXISTS User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### 2.c

```
import connection from "../connection";

export const createUsers = async (
  id: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    await connection("User").insert({
      id,
      email,
      password,
    });
  } catch (error: any) {
    return error.response?.data || error.message;
  }
};
```

### 3.a

Na linha 106, 'as string' garante que a key seja neste formato.

```
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

### 3.b

Type:

```
type AuthenticationData = {
    id: string;
}
```

Função:

```
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../src/types";
import dotenv from "dotenv";

const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,
        },

        process.env.JWT_KEY as string,

        {
            expiresIn: "24h"
        }
    );

    return token;
}
```

### 4

```
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { tokenGenerator } from "../services/tokenGenerator";
import { createUsers } from "../data/createUser";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 422;
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("Invalid password. At least six characters are required.");
    }

    const id = generateId();

    await createUsers(id, email, password);

    const token = tokenGenerator({
      id,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
```

### 5

```
import connection from "../connection";

const getUserByEmail = async (email: string): Promise<any> => {
  const result = await connection("User").select().where({ email });

  return result;
};
```

### 6

```
import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { tokenGenerator } from "../services/tokenGenerator";

export const login = async (req: Request, res: Response) => {
  try {

    const { email, password } = req.body;

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 422;
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error(
        "Invalid password. At least six characters are required."
      );
    }

    const user = await getUserByEmail(email);

    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    const token = tokenGenerator({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({  message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
```

### 7.a

"as any", na linha 244, garante que qualquer tipo de valor possa ser recebido, de modo que não haja erro.

```
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

### 7.b

```
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

```

### 8

```
import { Request, Response } from "express";
import { getTokenData } from "../data/getTokenData";
import { getUserById } from "../data/getUserById";

export const getUserLogData = async (req: Request, res: Response) => {
  try {
    const token = req.headers.Authorization as string;

    const authenticationData = getTokenData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
```

```
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```
