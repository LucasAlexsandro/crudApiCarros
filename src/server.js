require("dotenv").config({path: "variaveis.env"})

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
const routes = require("./routes");

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use("/api", routes)

server.get("/", (req, res) => res.send("Hello World!"));
server.listen(process.env.PORT || 3000, () => console.log(`Servidor rodando em http://localhost:${process.env.PORT}!`));
