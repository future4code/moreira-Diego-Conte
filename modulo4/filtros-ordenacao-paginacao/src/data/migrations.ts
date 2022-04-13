import connection from "./connection";
import users from "./users.json";

const createTables = () =>
  connection
    .raw(
      `CREATE TABLE IF NOT EXISTS filtrosOrdenacaoPaginacao(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL
        );   
        `
    )
    .catch((e) => e.response?.data || e.message)
    .then(console.log);

const insertUsers = () =>
  connection("filtrosOrdenacaoPaginacao")
    .insert(users)
    .then(() => {
      console.log("DB populated.");
    })
    .catch((e) => e.response?.data || e.message);


const closeConnection = () => {connection.destroy()};

createTables()
  .then(insertUsers)
  .finally(closeConnection)