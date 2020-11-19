const express = require("express");
const productRouter = express.Router();
const db = require('../Config/mySQL')

productRouter.get('/:id', (req, res) => {
    const {
        id
    } = req.params
    const getProductById = new Promise((resolve, reject) => {
        const qs = "SELECT p.id, p.product_name, p.product_desc, p.product_price, c.category_name, p.product_qty FROM products AS p JOIN categories AS c ON c.id = p.category_id WHERE p.id = ?"
        db.query(qs, id, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
    getProductById
        .then((data) => {
            if (!data.length) {
                res.status(404).json({
                    msg: "Data not Found",
                });
            }
            res.json(data[0]);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = productRouter