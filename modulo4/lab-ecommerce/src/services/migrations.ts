import connection from "../connection";

const createTables = () =>
  connection
    .raw(
      `CREATE TABLE IF NOT EXISTS labecommerce_users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        );
     
      CREATE TABLE IF NOT EXISTS labecommerce_products(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `
    )
    .catch((e) => e.response?.data || e.message)
    .then(console.log);

const closeConnection = () => {
  connection.destroy();
};

createTables().finally(closeConnection);
