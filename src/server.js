const express = require("express")
const { routes } = require("./routes")
const cors = require("cors")
require("./database/connection")

const app = express()
const PORT = 3333

app.use(cors({ allowedHeaders: "*" }))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || PORT, () => console.log("Server listening on port " + PORT))