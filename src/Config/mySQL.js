const mySQL = require("mysql");


const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "beginner",
})
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
})

module.exports = db;