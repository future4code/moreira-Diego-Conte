# LAMA

O LAMA, _Labenu Musical Awards_, é um festival com várias bandas famosas: ao final do evento, pode-se eleger a banda com a melhor performance!

## Endpoints

1. Cadastro

- Exemplo de requisição:

  ```bash
  https://dc-labook.herokuapp.com/user/signup
  Content-Type: application/json
   {
      "name": "Turma Moreira",
      "email": "moreira@labenu.com",
      "password": "senha123"
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 201 Created
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 220
  ETag: W/"dc-ec7r4rkKsMBe/V0SGyUkO6Vyto0"
  Date: Tue, 17 Nov 2020 14:33:15 GMT
  Connection: keep-alive
   {
      "message":"Success!",
      "token":"${token}"
   }
  ```

2. Login

- Exemplo de requisição:

  ```bash
  https://dc-labook.herokuapp.com/user/login
  Content-Type: application/json
   {
      "email": "moreira@labenu.com",
      "password": "senha123"
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 263
  ETag: W/"107-AM3ET8lQOdjL00R4Ol4xfVxzKGM"
  Date: Thu, 05 May 2022 12:13:21 GMT
  Connection: close
  {
      "message": "Hi, Turma Moreira, you have successfully logged in.",
      "token": "${token}"
  }
  ```

  ## Desenvolvedor

[Diego Conte](https://github.com/diegocomte)

## Instalação

```
$ git clone https://github.com/future4code/definirpath.git
$ npm install
$ npm start-dev
```

## Tecnologias

[Brcryptjs](https://www.npmjs.com/package/bcryptjs)\
[Cors](https://expressjs.com/en/resources/middleware/cors.html)\
[Dotenv](https://www.npmjs.com/package/dotenv)\
[Express](https://expressjs.com/)\
[Jest](https://jestjs.io/fr/)\
[Json Web Token](https://www.npmjs.com/package/jsonwebtoken)\
[Knex](http://knexjs.org/)\
[Moment](https://momentjs.com/)\
[Node](https://nodejs.org/en/)\
[Ts-Node](https://www.npmjs.com/package/ts-node)\
[TypeScript](https://www.typescriptlang.org/)\
[UUID](https://www.npmjs.com/package/uuid)\
[Visual Studio Code](https://code.visualstudio.com/docs/editor/vscode-web)

## Sites e Recursos

[Heroku](https://cookenu-diego.herokuapp.com/)
