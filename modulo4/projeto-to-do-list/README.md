# To Do List

## Descrição do Projeto
To Do List é uma API de gerenciamento de tarefas. O cadastro de usuários é simples: nome, apelido (nickname) e email.

As tarefas são definidas por título, descrição, data limite até a qual precisa ser feita, status e usuário solicitante (quem criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão de executá-las. Mais de um usuário pode ser diretamente responsável pela mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

## Desenvolvedor
[Diego Conte](https://github.com/diegocomte)


## Instalação
```
$ git clone https://github.com/future4code/moreira-Diego-Conte.git
$ npm install
$ npm start-dev
```

## Tecnologias
[Cors](https://expressjs.com/en/resources/middleware/cors.html)\
[Express](https://expressjs.com/)\
[Knex](http://knexjs.org/)\
[MYSQL](https://www.mysql.com)\
[Node](https://nodejs.org/en/)\
[SQL](https://sql.sh/)\
[TypeScript](https://www.typescriptlang.org/)\
[Visual Studio Code](https://code.visualstudio.com/docs/editor/vscode-web)

## Endpoints

### **Endpoint**: Criar usuário

-   **Método:** POST
-   **Path:** `/user`
-   **Body:**

```json
{
    "name": "Astro Dev",
    "nickname": "astrodev",
    "email": "astro@dev.com"
}
```

---

### **Endpoint**: Pegar usuário pelo id

-   **Método:** GET
-   **Path:** `/user/:id`
-   **Path Param**: ID do usuário
-   **Body de Resposta:**

```json
{
    "id": 001,
    "nickname": "astrodev"
}
```

---

### **Endpoint**: Editar usuário

-   **Método:** PUT
-   **Path:** `/user/edit/:id`
-   **Path Param**: ID do usuário
-   **Body:**

```json
{
    "name": "Astro Dev",
    "nickname": "astrodev"
}
```

---

### **Endpoint**: Criar tarefa

-   **Método:** POST
-   **Path:** `/task`
-   **Body:**

```json
{
    "title": "Criar banco dos alunos",
    "description": "Devemos criar o banco dos alunos para o módulo do backend",
    "limitDate": "04/05/2020",
    "creatorUserId": "001"
}
```

---

### **Endpoint**: Pegar tarefa pelo id

-   **Método:** GET
-   **Path:** `/task/:id`
-   **Path Param**: é o id da tarefa
-   **Body de Resposta:**

```json
{
    "taskId": "001",
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"status": "to_do",
	"creatorUserId": "001",
	"creatorUserNickname": "astrodev"
}
```

---

### **Endpoint**: Pegar todos os usuários

-   **Método:** GET
-   **Path:** `/user/all`
-   **Body de Resposta:**

```json
{
    "users": [{
		"id": 001,
		"nickname": "astrodev"
	}]
}
```

---

### **Endpoint**: Pegar tarefas criadas por um usuário

-   **Método:** GET
-   **Path:** `/task?creatorUserId=id`
-   **Query String:**: ID relativo ao usuário que criou a tarefa.
-   **Body de Resposta:**

```json
{
    "tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"status": "to_do",
		"creatorUserNickname": "astrodev"
	}]
}
```

---

### **Endpoint**: Pesquisar usuário

-   **Método:** GET
-   **Path:** `/user?query=astro`
-   **Query String:**: relativo ao termo de busca.
-   **Body de Resposta:**

```json
{
    "users": [{
		"id": "001",
		"nickname": "astrodev",
	}]
}
```

---

### **Endpoint**: Atribuir um usuário - ou mais - responsável por uma tarefa

-   **Método:** POST
-   **Path:** `/task/responsible`
-   **Body:**

```json
{
    "taskId": 000,
    "responsibleUserId": 001 ou [001, 002]
}
```

---

### **Endpoint**: Pegar usuários responsáveis por uma tarefa

-   **Método:** GET
-   **Path:** `/task/:id/responsible`
-   **Path Param**: ID da tarefa
-   **Body de Resposta:**

```json
{
    "users": [{
		"id": "001",
		"nickname": "astrodev"
	}]
}
```

---

### **Endpoint**: Atualizar o status de uma ou várias tarefas

-   **Método:** PUT
-   **Path:** `/task/status/edit`
-   **Path Param**: ID da tarefa
-   **Body:**

```json
{
    "status": "doing"
}
```

---

### **Endpoint**: Pegar todas as tarefas por status

-   **Método:** GET
-   **Path:** `/task/status?status=valor_do_status`
-   **Query String:**: relativo ao status que se deseja encontrar.
-   **Body de Resposta:**

```json
{
   "tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev"
	}]
}
```

---

### **Endpoint**: Pegar todas as tarefas atrasadas

-   **Método:** GET
-   **Path:** `/task/delayed`
-   **Body de Resposta:**

```json
{
   	"tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev"
	}]
}
```

---

### **Endpoint**: Retirar um usuário responsável de uma tarefa

-   **Método:** DELETE
-   **Path:** `/task/:taskId/responsible/:responsibleUserId`
-   **Path Param**: Dois IDs: O primeiro relativo à task (`taskId`) e o segundo ao usuário (`responsibleUserId`)

---

### **Endpoint**: Procurar tarefa por termos

-   **Método:** GET
-   **Path:** `/task?query=termo`
-   **Query String:**: relativo ao termo que se deseja procurar.
-   **Body de Resposta:**

```json
{
    "tasks": [{
		"taskId": "001",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"limitDate": "04/05/2020",
		"creatorUserId": "001",
		"creatorUserNickname": "astrodev",
	}]
}
```

