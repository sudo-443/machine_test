const express = require("express")
const route = express.Router()
const product = require("./model")

route.get("/list",product.List)

module.exports = route
