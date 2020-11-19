const express = require("express");
const searchRouter = express.Router();
const searchControllers = require('../Controllers/search')


searchRouter.get('/', searchControllers.searchProduct)


module.exports = searchRouter