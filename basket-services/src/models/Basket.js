const mongoose = require('mongoose')

const basketSchema = new mongoose.Schema({
    name : {type : String, trim : true, required : true},
    product : {type : String, trim : true, required : true},
    price : {type : String, trim : true, required : true},


}, {collection : "basket", timestamps:true})

const Basket = mongoose.model('basket', basketSchema)
module.exports = Basket