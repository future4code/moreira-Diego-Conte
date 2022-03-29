import express from "express";
import cors from "cors";
import { tasks } from "./Tasks";

//Starting configs >>>>>>
const app = express();
app.use(express.json());
app.use(cors());
//Ending configs <<<<<<

//Exercício 2
app.get("/ping", (req, res) => {
  res.status(200).send("Pong! <0/");
});

//Exercício 3
// Arquivo Tasks.ts

//Exercício 4
app.get("/tasks", (req, res) => {
  const taskStatus = req.body.status;

  const filteredTasks = tasks.filter((t) => {
    if (t.completed === taskStatus) {
      return t;
    }
  });

  res.status(200).send(filteredTasks);
});

//Exercício 5
app.post("/addtask", (req, res) => {
  const { title, completed } = req.body;

  tasks.push({
    userId: 1,
    id: tasks.length + 1,
    title,
    completed,
  });

  res.status(200).send(tasks);
});

app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});

//Exercício 6
app.put("/taskupdate/:id", (req, res) => {
  const idTask = Number(req.params.id);

  tasks.forEach((t) => {
    if (t.id === idTask) {
      if (t.completed === true) {
        return (t.completed = false);
      } else {
        return (t.completed = true);
      }
    }
  });

  res.status(200).send(tasks);
});

//Exercício 7
app.delete("/deletetask/:id", (req, res) => {
  const idTask = Number(req.params.id);

  tasks.forEach((t, i) => {
    if (t.id === idTask) {
      return tasks.splice(i, 1);
    }
  });

  res.status(200).send(tasks);
});

//Exercício 8
app.get("/alluserposts/:id", (req, res) => {
  const userId = Number(req.params.id);

  const selectedTasks = tasks.filter((p) => {
    if(p.userId === userId){
      return p
    } else{}
  });

  res.status(200).send(selectedTasks);
});
