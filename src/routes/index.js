const { Router } = require("express")
const { PagesController } = require("../controllers/PagesController")

const routes = Router()

routes.get("/", (req, res) => {
  return res.send("ok")
})
routes.get("/pages", PagesController.index)
routes.post("/pages/:name", PagesController.create)

module.exports = { routes }