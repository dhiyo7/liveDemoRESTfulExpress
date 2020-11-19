const express = require("express");
const morgan = require("morgan")
const mainRouter = require("./src/Routes/index")
const app = express();
const port = 8007;
app.listen(port, () => {
    console.log("====================================");
    console.log(`Server is running at port ${port}`);
    console.log("====================================");
});

// localhost:8000/products
// endpoint => /products
// localhost:8000/
// endpoint =>

// menambahkan logger
app.use(morgan("dev"))

// menambahkan bodyparser
// parser untuk x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))
// false => menggunakan qs
// true => menggunakan querystring

// parser untuk raw json
app.use(express.json())

// Membuat handler untuk enpoint /




// endpoint get products

// post data products

// req params dan query
// req params

// req query

app.use("/" , mainRouter)
module.exports = app;