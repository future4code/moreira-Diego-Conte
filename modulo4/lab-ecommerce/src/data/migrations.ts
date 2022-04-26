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

      CREATE TABLE IF NOT EXISTS labecommerce_purchases(
        id VARCHAR(255) PRIMARY KEY,
        user_id  VARCHAR(255),
        product_id VARCHAR(255),
        quantity INT DEFAULT "0",
        total_price FLOAT DEFAULT "0",
        FOREIGN KEY (user_id) REFERENCES labecommerce_users (id),
        FOREIGN KEY (product_id) REFERENCES labecommerce_products (id)
      );
    `
    )
    .catch((e) => e.response?.data || e.message)
    .then(console.log);

const closeConnection = () => {
  connection.destroy();
};

createTables().finally(closeConnection);
