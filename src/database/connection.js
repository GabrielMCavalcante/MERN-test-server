const { MongoClient } = require("mongodb");

async function connect() {
  console.log("Connecting to mongodb...");
  const client = await MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  console.log("Connected!")
  return client
}

module.exports = connect()