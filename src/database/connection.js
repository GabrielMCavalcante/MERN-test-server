const { MongoClient } = require("mongodb");

async function connect() {
  const client = await MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  return client
}

module.exports = connect()