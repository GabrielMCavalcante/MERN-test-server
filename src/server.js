const express = require("express")
const { routes } = require("./routes")
const cors = require("cors")

const app = express()
const PORT = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || PORT, () => console.log("Server listening on port " + PORT))