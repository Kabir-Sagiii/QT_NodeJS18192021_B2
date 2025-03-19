const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function createConnection() {
  await client.connect();

  const db = client.db("db18to21");
  const productsColl = db.collection("products");

  return productsColl;
}

module.exports = createConnection;
