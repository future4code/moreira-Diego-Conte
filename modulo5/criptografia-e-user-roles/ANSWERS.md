# CRIPTOGRAFIA E USER ROLES

## Exercícios

### 1.a

No código abaixo, 'rounds' refere-se ao fator cost e à quantidade de tempo que é dedicada ao cálculo do hash que garante a segurança da senha; indica-se que seu valor seja 12. Já 'salt' é uma string aleatória que garante que o hash não seja decodificado (ou facilmente decodificado).

```
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```

### 1.b

```
export class HashManager {
  createHash = (pleinText: string): string => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = genSaltSync(rounds);
    const cypherText: string = hashSync(pleinText, salt);

    return cypherText;
  };
}
```

### 1.c

```
export class HashManager {
  compareHash = (pleinText: string, hash: string): boolean => {
    return compareSync(pleinText, hash);
  };
}
```

### 2.a

Precisamos alterar primeiramente o endpoint de cadastro para protegermos a senha que o usuário informar: até então ela está vulnerável. Ademais, precisaremos da senha criptografada para compará-la no endpoint de login.

### 2.b

```
export const createUser = async (req: Request, res: Response) => {
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

    const cypherPassword: string = new HashManager().createHash(password)

    const id = generateId();

    await createUsers(id, email, cypherPassword);

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

### 2.c

```
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

    const isPasswordCorrect: boolean = new HashManager().compareHash(password, user.password)

    if (!user || !isPasswordCorrect) {
      throw new Error("Invalid password");
    }

    const token = tokenGenerator({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
```

### 2.d

Não será necessário alterar o endpoint 'user/profile' porque ele não faz uso da senha, somente do token.

### 3.a

```
ALTER TABLE User ADD role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL" NOT NULL;
```

### 3.b

```
export type AuthenticationData = {
  id: string;
  role: string;
};
```

```
export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  return result;
};
```

### 3.c

```
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

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

    if (!role) {
      res.statusCode = 422;
      throw new Error("Please, inform user role.");
    }

    const cypherPassword: string = new HashManager().createHash(password);

    const id = generateId();

    await createUsers(id, email, cypherPassword, role);

    const token = tokenGenerator({
      id,
      role,
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

### 3.d

```
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

    const isPasswordCorrect: boolean = new HashManager().compareHash(password, user.password)

    if (!user || !isPasswordCorrect) {
      throw new Error("Invalid password");
    }

    const token = tokenGenerator({
      id: user.id,
      role: user.role
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.sqlMessage || error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
};
```

### 4.a

```
export const getUserLogData = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    const user = await getUserById(authenticationData.id);

    if (user.role !== "NORMAL") {
      res.statusCode = 403;
      throw new Error("usuário não autorizado");
    }

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
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
