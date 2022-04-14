import connection from "../connection";


const createTables = () =>
  connection
    .raw(
      `CREATE TABLE IF NOT EXISTS AddressUser(
        id FLOAT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        zipcode VARCHAR(255) NOT NULL,
        street VARCHAR(255) NOT NULL,
        number INT,
        address2 VARCHAR(255),
        district VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL
        );   
        `
    )
    .catch((e) => e.response?.data || e.message)
    .then(console.log);

const closeConnection = () => {
  connection.destroy();
};

createTables().finally(closeConnection);