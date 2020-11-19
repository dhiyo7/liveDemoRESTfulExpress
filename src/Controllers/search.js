const searchModel = require ('../Models/search')
const form = require ('../Helpers/form')

module.exports = {
    searchProduct: (req, res) => {
        const {q} = req.query
        const keyword = "%" + q + "%"
        searchModel
        .searchProduct(keyword)
        .then((data) => {
            form.success(res,data)
        })
        .catch((err) =>{
            form.error(res,err)
        })
    }
}
