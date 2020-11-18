const express = require('express');
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running at port ${port}`);
    console.log('====================================');
})

// localhost:8000/products
// endpoint => /products
// localhost:8000/
// endpoint =>

// Membuat handler untuk enpoint /
app.get("/", (req, res) => {
    res.send("Selamat Datang")
})