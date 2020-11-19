const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
    res.send("Selamat Datang");
});

module.exports = welcomeRouter