const connection = require("../database/connection")

const DB_NAME = "mern_job_test_database"
class PagesController {
  static async index(req, res) {
    const client = await connection
    const db = client.db(DB_NAME)
    
    const pages = await db.collection("pages").find().toArray()

    return res.status(200).json({
      data: pages
    })
  }

  static async create(req, res) {
    const { name } = req.params

    const client = await connection
    const db = client.db(DB_NAME)

    const pageExists = await db.collection("pages").findOne({ name })

    if (pageExists) {
      return res.status(400).json({
        message: "Page already exists"
      })
    }

    db.collection("pages").insertOne({ name }).then(() => {
      return res.status(201).json({
        data: name
      })
    })
  }
}

module.exports = { PagesController }