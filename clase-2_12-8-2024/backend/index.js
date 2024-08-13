// importación tipo common js (hasta 2015)
// const express = require("express")
 
// importación tipo ES Modules (actual)
import express from "express"
import cors from "cors"
// fs -> file system
import {readFileSync} from "node:fs"

const products = JSON.parse(readFileSync("./data.json"))

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json(products)
})

// localhost:1234
// 56000 puertos totales
app.listen(3333, () => {
  console.log("Aplicación en ejecución")
})
