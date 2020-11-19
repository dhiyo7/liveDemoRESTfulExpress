const express = require("express");
const productsRouter = express.Router();
const db = require('../Config/mySQL')

productsRouter.get('/', (_, res) => {
    const getAllProducts = new Promise((resolve, reject) => {
        const queryString =
            "SELECT p.id, p.product_name, p.product_desc, p.product_price, c.category_name, p.product_qty FROM products AS p JOIN categories AS c ON c.id = p.category_id"
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
    getAllProducts
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

productsRouter.post('/', (req, res) => {
    // mendapatkan objek requset dari client
    // melakukan query ke db
    // mengirim response
    const {
        body
    } = req
    const insertBody = {
        ...body,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now())
    }
    const postNewProduct = new Promise((resolve, reject) => {
        const qs = "INSERT INTO products SET ?"
        db.query(qs, insertBody, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
    postNewProduct
        .then((data) => {
            const resObject = {
                msg: "Data Berhasil dimasukan",
                data: {
                    id: data.insertId,
                    ...insertBody
                }
            }
            res.json(resObject)
        })
        .catch((err) => {
            res.json(err)
        })
})


module.exports = productsRouter