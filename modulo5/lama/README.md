# LAMA

O LAMA, _Labenu Musical Awards_, é um festival com várias bandas famosas: ao final do evento, pode-se eleger a banda com a melhor performance!

## Endpoints

1. Cadastro

- Exemplo de requisição:

  ```bash
  https://lama-diego.herokuapp.com/users/signup
  Content-Type: application/json

   {
      "name": "Nome do usuário",
      "email": "usuario@email.com",
      "password": "senha123",
      "role": "admin ou normal"
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  Server: Cowboy
  Connection: close
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 265
  Etag: W/"109-whukDHY1tuMRYzpqQJ4Y7Uv15NI"
  Date: Sat, 14 May 2022 12:52:32 GMT
  Via: 1.1 vegur
   {
      "message": "User successfully created.",
      "access_token": "${token}"
   }
  ```

2. Login

- Exemplo de requisição:

  ```bash
  https://lama-diego.herokuapp.com/users/login
  Content-Type: application/json

   {
      "email": "usuario@email.com",
      "password": "senha123"
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  Server: Cowboy
  Connection: close
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 260
  Etag: W/"104-vvJ6FS9MFzPph8KOJ3u3xMob5U8"
  Date: Sat, 14 May 2022 12:54:09 GMT
  Via: 1.1 vegur
  {
      "message": "Welcome, ${Nome Usuário}.",
      "access_token": "${token}"
  }
  ```

3. Registrar Banda

- Exemplo de requisição:

  ```bash
  https://lama-diego.herokuapp.com/bands/register
  authorization: ${token do usuário administrador}
  Content-Type: application/json

   {
      "name": "LabOrquestra",
      "musicGenre": "Erudita",
      "responsible": "Maestro Karajan"
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  Server: Cowboy
  Connection: close
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 43
  Etag: W/"2b-7I1OymsC+AuPVzDUhHsHRjizN5I"
  Date: Sat, 14 May 2022 12:58:29 GMT
  Via: 1.1 vegur

    {
      "message": "Band successfully registered."
    }
  ```

4. Verificar informações das bandas cadastradas

- Exemplo de requisição:

  ```bash
  https://lama-diego.herokuapp.com/bands/informations?query=LabO
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  Server: Cowboy
  Connection: close
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 145
  Etag: W/"91-IBoaCBuYImBiExL1Fz11oTnEzwY"
  Date: Sat, 14 May 2022 13:00:46 GMT
  Via: 1.1 vegur

    {
      "band_informations": 

      {
        "id": "8a5356d1-5efb-4bad-88c0-4a7bccd54668",
        "name": "LabOrquestra",
        "music_genre": "Erudita",
        "responsible": "Maestro Karajan"
      }
    }
  ```

5. Registrar show

- Exemplo de requisição:

  ```bash
  https://lama-diego.herokuapp.com/shows/register
  authorization: ${token do usuário administrador}
  Content-Type: application/json

   {
      "bandId": `${ID da banda}`,
      "weekDay": "domingo",
      "startTime": 15,
      "endTime": 18
   }
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  Server: Cowboy
  Connection: close
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 43
  Etag: W/"2b-XU7lnf1lT1MB1wdQGlSDBkoGCzk"
  Date: Sat, 14 May 2022 13:03:37 GMT
  Via: 1.1 vegur

    {
      "message": "Show successfully registered."
    }
  ```

6. Verificar informações dos shows cadastrados

- Exemplo de requisição:

  ```bash
  https://lama-diego.herokuapp.com/shows?query=domingo
  ```

- Exemplo de resposta (sucesso):

  ```bash
  HTTP/1.1 200 OK
  Server: Cowboy
  Connection: close
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  Content-Type: application/json; charset=utf-8
  Content-Length: 150
  Etag: W/"96-/Ae5Qjhe7OCc0mSKTcD0FOZKytY"
  Date: Sat, 14 May 2022 13:04:32 GMT
  Via: 1.1 vegur

    {
      "Schedule": 
      [
        {
          "Band": "LabRock!",
          "Music": "Metal Sinfônico"
        },
        {
          "Band": "LabRock!",
          "Music": "Metal Sinfônico"
        },
        {
          "Band": "LabOrquestra",
          "Music": "Erudita"
        }
      ]
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

```

```
