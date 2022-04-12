import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

// EXERCÍCIO 1
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);

  return result[0][0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001"));
})();

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

// Exercício 1.a
// Quando usamos raw, temos como resposta um grande array com outros arrays contém os dados desejados.
// Ao final temos, inclusive dados relativos ao Banco de Dados.

// Exercício 1.b
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'`);

  return result;
};

// Exercício 1.c
const countActorsByGender = async (gender: string): Promise<any> => {
  const counting = await connection.raw(`
    SELECT COUNT(*) AS result FROM Actor WHERE gender = "${gender}"`);
  const result = counting[0][0].result;

  return result;
};

// EXERCÍCIO 2

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

// Exercício 2.a
const updateSalary = async (id: number, salary: string): Promise<void> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// Exercício 2.b
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

// Exercício 2.c
const averageSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

// EXERCÍCIO 3

// Exercício 3.a
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
});

// Exercício 3.b
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActorsByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// EXERCÍCIO 4
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.gender
    );

    res.status(200).send(`${req.body.name} register created successfully.`);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// Exercício 4.a
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Salary updated successfully.",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// Exercício 4.b
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await deleteActor(id);

    res.status(200).send(`User deleted successfully.`);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
});

// EXERCÍCIO 5
const createMovie = async (
  id: string,
  title: string,
  synopsys: string,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsys: synopsys,
      release_date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movies");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      new Date(req.body.releaseDate),
      new Date(req.body.playingLimitDate)
    );

    res.status(200).send({
      message: `${req.body.title} register created successfully.`,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// EXERCÍCIO 6
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Movies LIMIT 15
    `);

  return result[0];
};

app.get("/movies", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// EXERCÍCIO 7
const searchMovie = async (query: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies WHERE title LIKE "%${query}%" OR synopsys LIKE "%${query}%";
      `);

  return result[0];
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});