# LABOOK

O _LaBook_ é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal"), comentá-los e curti-los também.

## Endpoints

1. Cadastro

- Exemplo de requisição:

  ```bash
  http://localhost:3003/user/signup
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

  {"message":"Success!", "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5OGJjNDVlLTExZjEtNGEyMy04OTZhLTdmMmUyOWNmZTAxMiIsImlhdCI6MTYwNTYyMzU5NSwiZXhwIjoxNjA1NzA5OTk1fQ.pWxV2vtLnp0hKm0CXXnLpnDu6PEPkZM27A71oTTCYfE"}
  ```

2. Login

- Exemplo de requisição:

  ```bash
  http://localhost:3003/user/login
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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliNjRjOWI1LTQ1ZjAtNGZhMy1iMWQyLTg2ODZhYWY1YjUzNyIsImlhdCI6MTY1MTc1MjgwMSwiZXhwIjoxNjUxODM5MjAxfQ.We2WAgFxbdRFV8qQ7Pnllm8XT-u1g17NKQbBGzkb5mc"
  }
  ```

3. Criar Post

- Exemplo de requisição:

  ```bash
  http://localhost:3003/post/create
  authorization: ${token}
  Content-Type: application/json

   {
   "photo": "https://img.freepik.com/fotos-gratis/quadro-negro-com-livro-de-pilha_488220-9873.jpg?w=2000",
   "description": "Ler é viajar sem sair do lugar",
   "type": "normal"
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 201 Created
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 89
  ETag: W/"59-wRLqVrxMV4mJGTMMrzUxnflijAY"
  Date: Thu, 05 May 2022 12:19:53 GMT
  Connection: close

   {
   "message": "Post successfully created.",
   "post_id": "3c7db4ef-5f9d-4904-92a8-b42b1247163f"
   }
  ```

4. Buscar Post por id

- Exemplo de requisição:

  ```bash
  http://localhost:3003/post/${id}
  authorization:${token}
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 273
  ETag: W/"111-ic1BPKC7JKaUMD8onheRb/RDOC0"
  Date: Thu, 05 May 2022 12:21:00 GMT
  Connection: close

   {
   "id": "d4794239-5231-4734-a551-5c20dad036e1",
   "URLphoto": "shorturl.at/jCHI6",
   "description": "Venha sonhar ao som do 'O Lago dos Cisnes', de Tchaikovski.",
   "type": "event",
   "createdAt": "terça-feira, 3 de maio de 2022 às 17:38",
   "authorId": "6202eb95-2386-4dd4-b077-3fa8e8081c08"
   }
  ```

## Desenvolvedor

[Diego Conte](https://github.com/diegocomte)

## Instalação

```
$ git clone https://github.com/future4code/moreira-Diego-Conte.git
$ npm install
$ npm start-dev
```

## Tecnologias

[Brcryptjs](https://www.npmjs.com/package/bcryptjs)\
[Cors](https://expressjs.com/en/resources/middleware/cors.html)\
[Dotenv](https://www.npmjs.com/package/dotenv)\
[Express](https://expressjs.com/)\
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